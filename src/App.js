import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import Navigation from './Components/Navigation/Navigation.js';
import Signin from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/Signin/Signin.js';
import Rank from './Components/Rank/Rank.js';
import './App.css';

const app = new Clarifai.App({
 apiKey: '90d1a395efcb48259c110118c84899f1'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box:{},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width, height)
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    // console.log('button click');
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, //remember we can use all kinds of models they provided in their git hub
      this.state.input)
    .then(response =>
          // when response will go inside calculateFaceLocation then displayFaceBox
          // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
          this.displayFaceBox(this.calculateFaceLocation(response)))
          .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
            params={particlesOptions}
        />
        <Navigation />
        <Signin />
        <Logo />
        <Rank />
        <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
