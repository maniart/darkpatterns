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

import { scale }    from './utils';

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
        physics={{debug:true}}
        keyboard-shortcuts=""
        canvas=""
        vr-mode-ui="">

        <Entity id="outside">
          <Platform
            width={200}
            height={1}
            depth={200}
            color="green"
            position={[0, -2, 0]} />
        </Entity>

        <Entity id="room">

          <Roof
            width={ scale(155) }
            height={ 1 }
            depth={ scale(170) }
            position={[0, 6, 0]} />

          <Platform
            width={ scale(155) }
            height={1}
            depth={ scale(170) }
            position={[0, 0, 0]} />

          <Wall
            width={ scale(39 + 55 + 24) }
            height={ 6 }
            depth={ 0.1 }
            position={[-3.7, 3, 10]} />


          <Camera
            position={[0, 0, 25]}
            userHeight={ scale(5.5) }>
            <Cursor />
          </Camera>

          <Sky />

        </Entity>


      </Scene>
    );
  }
}

ReactDOM.render(
  <RootScene />,
  document.querySelector('.scene-container')
);
