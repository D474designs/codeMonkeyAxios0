import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Home</p>
          <p onClick={() => onRouteChange('tutorial')} className='f3 link dim black underline pa3 pointer'>Tutoriales</p>
          <p onClick={() => onRouteChange('foro')} className='f3 link dim black underline pa3 pointer'>Foro</p>
          <p onClick={() => onRouteChange('sugerencias')} className='f3 link dim black underline pa3 pointer'>sugerencias</p>
          <p onClick={() => onRouteChange('ChangitoAI')} className='f3 link dim black underline pa3 pointer'>ChangitoAI</p>
          <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>

        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;
