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

          {/* Roof + Ceiling */}
          <Roof
            id="ceiling"
            src="#east-wall-texture"
            width={ 31 }
            height={ 1 }
            depth={ 34 }
            position={[0, 22, 0]} />
          <Roof
            id="roof"
            width={ 31 }
            height={ 1 }
            depth={ 34 }
            position={[0, 22.14, 0]} />


          <Platform
            id="floor"
            src="#east-wall-texture"
            width={ 31 }
            height={ 1 }
            depth={ 34 }
            position={[0, -0.34, 0]} />


          {/* South Wall: in & out */}
          <Wall
            id="wall-south-inner"
            src="#east-wall-texture"
            width={ 22.6 }
            height={ 22.84 }
            depth={ 0.1 }
            position={[-4.2, 11.21, 17]} />
          <Wall
            id="wall-south-outer"
            width={ 22.6 }
            height={ 22.84 }
            depth={ 0.1 }
            position={[-4.2, 11.21, 17.04]} />


          {/* West Wall: Segment I: in & out */}
          <Wall
            id="wall-west-segment-1-inner"
            src="#east-wall-texture"
            width={ 6 }
            height={ 22.6 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.53, 11.37, 14.08]} />
          <Wall
            id="wall-west-segment-1-outer"
            width={ 6 }
            height={ 22.6 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.55, 11.37, 14.08]} />


          {/* West Wall: Segment II: Bottom of window: in & out */}
          <Wall
            id="wall-west-segment-2-1-inner"
            src="#east-wall-texture"
            width={ 6.8 }
            height={ 5.6 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.53, 2.9, 8]} />
          <Wall
            id="wall-west-segment-2-1-outer"
            width={ 6.8 }
            height={ 5.6 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.55, 2.9, 8]} />



          {/* West Wall: Segment II: Top of window */}
          <Wall
            id="wall-west-segment-2-2-inner"
            src="#east-wall-texture"
            width={ 6.8 }
            height={ 3.72 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.53, 20.79, 8]} />
          <Wall
            id="wall-west-segment-2-2-outer"
            width={ 6.8 }
            height={ 3.72 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.58, 20.79, 8]} />



          {/* West Wall: Segment III */}
          <Wall
            id="wall-west-segment-3-inner"
            src="#east-wall-texture"
            width={ 9.6 }
            height={ 22.66 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.53, 11.35, -0.1]} />
          <Wall
            id="wall-west-segment-3-outer"
            width={ 9.6 }
            height={ 22.66 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.55, 11.35, -0.1]} />



          {/* West Wall: Segment IV: Bottom of window */}
          <Wall
            id="wall-west-segment-4-1-inner"
            src="#east-wall-texture"
            width={ 6.8 }
            height={ 5.6 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.53, 2.79, -8.20]} />
          <Wall
            id="wall-west-segment-4-1-outer"
            width={ 6.8 }
            height={ 5.6 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.55, 2.79, -8.20]} />



          {/* West Wall: Segment IV: Top of window */}
          <Wall
            id="wall-west-segment-4-2-inner"
            src="#east-wall-texture"
            width={ 6.8 }
            height={ 3.72 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.53, 20.79, -8.2]} />
          <Wall
            id="wall-west-segment-4-2-outer"
            width={ 6.8 }
            height={ 3.72 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.55, 20.79, -8.2]} />



          {/* West Wall: Segment V */}
          <Wall
            id="wall-west-segment-5-inner"
            src="#east-wall-texture"
            width={ 5.4 }
            height={ 22.66 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.53, 11.35, -14.3]} />
          <Wall
            id="wall-west-segment-5-outer"
            width={ 5.4 }
            height={ 22.66 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.55, 11.35, -14.3]} />



          {/* North Wall */}
          <Wall
            id="wall-south-inner"
            src="#east-wall-texture"
            width={ 31 }
            height={ 22.66 }
            depth={ 0.1 }
            position={[0, 11.35, -17]} />
          <Wall
            id="wall-south-outer"
            width={ 31 }
            height={ 22.66 }
            depth={ 0.1 }
            position={[0, 11.35, -17.02]} />


          {/* East Wall */}
          <Wall
            id="wall-east-inner"
            src="#east-wall-texture"
            width={ 34 }
            height={ 22.66 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[15.5, 11.35, 0]} />
          <Wall
            id="wall-east-outer"
            width={ 34 }
            height={ 22.66 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[15.54, 11.35, 0]} />

          {/* Murphy bed */}
          <Entity
            id="murphy-bed"
            position={[-0.92, 9, -14.46]}
            material={{
              color: '#fff',
              shader: 'standard'
            }}
            geometry={{
              primitive: 'box',
              height: 18,
              width: 13.4,
              depth:5}} />


          {/* Couch */}
          <Entity
            id="couch"
            position={[0, 2, -10]}
            material={{
              color: '#fff',
              shader: 'standard'
            }}
            rotation={[0, -90, 0]}
            position={[12.9, 2.00, 0.83]}
            geometry={{
              primitive: 'box',
              height: 4.8,
              width: 16.8,
              depth: 6.6 }} />

          {/* Amp table */}
          <Entity
            id="amp-table"
            position={[12.46, 2.00, -9.98]}
            material={{
              color: '#fff',
              shader: 'standard'
            }}
            rotation={[0, -90, 0]}
            geometry={{
              primitive: 'box',
              height: 3.6,
              width: 4.8,
              depth: 3.6 }} />


          {/* Bike */}
          <Entity
            id="bike"
            position={[12.46, 17.8, 1.8]}
            material={{
              color: '#fff',
              shader: 'standard'
            }}
            rotation={[0, -90, 0]}
            geometry={{
              primitive: 'box',
              height: 8.6,
              width: 12.6,
              depth: 2.2 }} />


        </Entity>
        {/* Room ends */}

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
