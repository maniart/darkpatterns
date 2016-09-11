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
import Roof         from './components/Roof';

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

        <Roof />

        <Camera position={[-1,1,2]}>
          <Cursor />
        </Camera>

        <Sky />

          <Platform
            width={10}
            height={1}
            depth={30}
            position={[0, 0, 0]} />

      </Scene>
    );
  }
}

ReactDOM.render(
  <RootScene />,
  document.querySelector('.scene-container')
);
