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
        </a-assets>

        <Entity
          id="outside"
          position={[0, -0.5, 0]}>
          <Platform
            id="earth"
            width={200}
            height={1}
            depth={200}
            color="green" />
        </Entity>

        <Entity
          id="room"
          position={[0, 0, 0]}>

          <Roof
            id="roof"
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
            id="wall-south"
            width={ 22.6 }
            height={ 22 }
            depth={ 0.1 }
            position={[-3.68, 11, 17]} />

          {/* West Wall: Segment I */}
          <Wall
            id="wall-west-segment-1"
            width={ 6 }
            height={ 22 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 11, 14.0]} />

          {/* West Wall: Segment II: Bottom of window */}
          <Wall
            id="wall-west-segment-2-1"
            width={ 6.8 }
            height={ 5.6 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 2.9, 8]} />

          {/* West Wall: Segment II: Top of window */}
          <Wall
            id="wall-west-segment-2-2"
            width={ 6.8 }
            height={ 3.4 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 20.3, 8]} />

          {/* West Wall: Segment III */}
          <Wall
            id="wall-west-segment-3"
            width={ 9.6 }
            height={ 22 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 11, -0.1]} />

          {/* West Wall: Segment IV: Bottom of window */}
          <Wall
            id="wall-west-segment-4-1"
            width={ 6.8 }
            height={ 5.6 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 2.9, -8.26]} />

          {/* West Wall: Segment IV: Top of window */}
          <Wall
            id="wall-west-segment-4-2"
            width={ 6.8 }
            height={ 3.4 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 20.3, -8.2]} />

          {/* West Wall: Segment V */}
          <Wall
            id="wall-west-segment-5"
            width={ 5.4 }
            height={ 22 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 11, -14.3]} />

          {/* South Wall */}
          <Wall
            id="wall-south"
            width={ 31 }
            height={ 22 }
            depth={ 0.1 }
            position={[0, 11, -17]} />

          {/* East Wall */}
          <Wall
            id="wall-east"
            src="#east-wall-texture"
            width={ 34 }
            height={ 22 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[15.5, 11, 0]} />

        </Entity>

        <Camera
          position={[0, 2, -10]}
          userHeight={6}
          velocity={[0, 0, 10]}
          fov={80}
          far={100}>
          <Cursor />
        </Camera>

        <Sky />

      </Scene>
    );
  }
}

ReactDOM.render(
  <RootScene />,
  document.querySelector('.scene-container')
);

(function(){var script=document.createElement('script'); script.src='https://aframe.io/releases/0.3.0/aframe-inspector.min.js';document.head.appendChild(script);})()
