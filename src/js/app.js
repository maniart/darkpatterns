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

// k = 5
// e.g: width = 155 => 31
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

        <Entity id="room">
          <Roof
            color="#fff"
            position={[0, 6, 0]}
            width={34}
            height={1}
            depth={31} />


          <Wall
            color="yellow"
            height={6}
            width={26.6}
            depth={0.1}
            position={[-3.7, 3, 10]} />

          <Entity
            static-body=""
            geometry={{
              primitive: 'box',
              width: 1,
              height: 1,
              depth: 1
            }}

            rotation={[0, 45, 90]}

            material={{
              color: 'red',
              shader: 'flat'
            }}

            position={[2, 2, 2]}/>

          <Camera
            position={[-1, 1, 15]}
            userHeight={1.02}>
            <Cursor />
          </Camera>

          <Sky />

          <Platform
            color="#fff"
            width={34}
            height={1}
            depth={30}
            position={[0, 0, 0]} />


        </Entity>


      </Scene>
    );
  }
}

ReactDOM.render(
  <RootScene />,
  document.querySelector('.scene-container')
);
