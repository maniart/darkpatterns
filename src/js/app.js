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
        vr-mode-ui={{enabled: true }}>

        <a-assets>
          <img id="east-wall-texture"
            src="../assets/east-wall-texture.png" />
          <img id="starry-night-sky-texture"
            src="../assets/starry-night.jpg" />
          <img id="pgp-texture"
            src="../assets/pgp.png" />
        </a-assets>

        <Entity
          id="outside"
          position={[0, -0.5, 0]}>
          <Platform
            id="earth"
            width={200}
            height={1}
            depth={200}
            src="#pgp-texture" />
        </Entity>

        <Entity
          id="room"
          position={[0, 0, 0]}>

          <Roof
            id="ceiling"
            src="#east-wall-texture"
            width={ 31 }
            height={ 1 }
            depth={ 34 }
            position={[0, 22, 0]} />

          <Platform
            id="floor"
            width={ 31 }
            height={ 1 }
            depth={ 34 }
            position={[0, -0.34, 0]} />

          {/* South Wall */}
          <Wall
            id="wall-south-inner"
            src="#east-wall-texture"
            width={ 22.6 }
            height={ 22 }
            depth={ 0.1 }
            position={[-4.2, 11, 17]} />

          {/* West Wall: Segment I */}
          <Wall
            id="wall-west-segment-1-inner"
            src="#east-wall-texture"
            width={ 6 }
            height={ 22 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 11, 14.0]} />

          {/* West Wall: Segment II: Bottom of window */}
          <Wall
            id="wall-west-segment-2-1-inner"
            src="#east-wall-texture"
            width={ 6.8 }
            height={ 5.6 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 2.9, 8]} />

          {/* West Wall: Segment II: Top of window */}
          <Wall
            id="wall-west-segment-2-2-inner"
            src="#east-wall-texture"
            width={ 6.8 }
            height={ 3.4 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 20.3, 8]} />

          {/* West Wall: Segment III */}
          <Wall
            id="wall-west-segment-3-inner"
            src="#east-wall-texture"
            width={ 9.6 }
            height={ 22 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 11, -0.1]} />

          {/* West Wall: Segment IV: Bottom of window */}
          <Wall
            id="wall-west-segment-4-1-inner"
            src="#east-wall-texture"
            width={ 6.8 }
            height={ 5.6 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 2.9, -8.26]} />

          {/* West Wall: Segment IV: Top of window */}
          <Wall
            id="wall-west-segment-4-2-inner"
            src="#east-wall-texture"
            width={ 6.8 }
            height={ 3.4 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 20.3, -8.2]} />

          {/* West Wall: Segment V */}
          <Wall
            id="wall-west-segment-5-inner"
            src="#east-wall-texture"
            width={ 5.4 }
            height={ 22 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 11, -14.3]} />

          {/* South Wall */}
          <Wall
            id="wall-south-inner"
            src="#east-wall-texture"
            width={ 31 }
            height={ 22 }
            depth={ 0.1 }
            position={[0, 11, -17]} />


          {/* East Wall */}
          <Wall
            id="wall-east-inner"
            src="#east-wall-texture"
            width={ 34 }
            height={ 22 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[15.5, 11, 0]} />
          <Wall
            id="wall-east-outer"
            width={ 34 }
            height={ 22 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[15.54, 11, 0]} />


        </Entity>

        <Camera
          id="camera-kinetic"
          active={true}
          position={[-8.5, 7.45, 27]}
          userHeight={5}
          velocity={[0, 0, 10]}
          fov={80}
          far={100}>
          <Cursor />
        </Camera>

        <Sky src="#starry-night-sky-texture" />

        <Light
          id="light-room-ceiling"
          type="point"
          decay={0}
          distance={0}
          intensity={0.8}
          position={[0, 19.3, 0]}
          angle={60} />

        <Light
          id="light-moon"
          type="ambient"
          decay={0}
          distance={0}
          intensity={0.8}
          position={[0, 77.2, 0]}
          angle={60} />

      </Scene>
    );
  }
}

ReactDOM.render(
  <RootScene />,
  document.querySelector('.scene-container')
);
