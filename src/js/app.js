import 'aframe';
import 'babel-polyfill';
import {
  Animation,
  Entity,
  Scene
}                   from 'aframe-react';
import React        from 'react';
import ReactDOM     from 'react-dom';

import Camera       from './components/Camera';
import Cursor       from './components/Cursor';
import Sky          from './components/Sky';
import Platform     from './components/Platform';

class RootScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texture: '#popup-1'
    }
  }

  changeTexture = () => {
    const sources = ['#popup-1', '#popup-2', '#popup-3', '#popup-4', '#popup-5', '#popup-6'];
    let texture = sources[Math.floor(Math.random() * sources.length)];
    console.warn('#changeTexture: changing texture to: ', texture);
    this.setState({
      texture
    });
  };

  render () {
    return (
      <Scene>

        <Camera position={[-1,1,2]}>
          <Cursor />
        </Camera>

        <Sky />

          <Platform
            width={3}
            height={1}
            depth={1}
            position={[0, 0, 0]} />

      </Scene>
    );
  }
}

ReactDOM.render(
  <RootScene />,
  document.querySelector('.scene-container')
);
