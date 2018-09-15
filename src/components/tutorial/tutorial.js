import YouTube from 'react-youtube';
import React from 'react';

class Tutorial extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //       name: '',
  //       description: '',
  //       additional_desc: ''
  //   }

    // this.handleSubmit = this.handleSubmit.bind(this)

    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 2
        }
      };

    return (
      <YouTube
        videoId="IBB-m1lfaqY"
        opts={opts}
        onReady={this._onReady}
      />
    );

    // logChange(e) {
    //     this.setState({[e.target.name]: e.target.value});
    // }

  }

  //  // refactor into axios
  // getTutorial(){
  //   $.ajax({
  //     url:'/Tutorial',
  //     type:"GET",
  //     success: (data) => {
  //       this.setState({
  //         list: data
  //       });
  //     },
  //     error: (xhr, err) => {
  //       console.log('Can\'t get tutorial information', err);
  //     }
  //   })
  // }

    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }
// }

export default Tutorial;
