// import 'aframe';
// import 'aframe-extras';
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
import Roof         from './components/Roof';
import Light        from './components/Light';
import Wall         from './components/Wall';

/*
  TODO: create multiple scenes?
*/
class RootScene extends React.Component {
  constructor(props) {
    super(props);

  }


  render () {
    return (
      <Scene
        physics=""
        keyboard-shortcuts=""
        canvas=""
        vr-mode-ui="">

        <Roof color="green" />

        <Wall />

        <Camera
          position={[-1,1,15]}
          userHeight={4}>
          <Cursor />
        </Camera>

        <Sky />

        <Platform
          width={50}
          height={1}
          depth={50}
          position={[0, 0, 0]} />

      </Scene>
    );
  }
}

ReactDOM.render(
  <RootScene />,
  document.querySelector('.scene-container')
);
