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
          <img id="starry-night-sky-texture"
            src="../assets/starry-night.jpg" />
          <img id="pgp-texture"
            src="../assets/pgp.png" />


          <img id="west-wall-texture-0"
            src="../assets/west-wall-textures/0.png" />
          <img id="west-wall-texture-1"
            src="../assets/west-wall-textures/1.png" />
          <img id="west-wall-texture-2"
            src="../assets/west-wall-textures/2.png" />

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
            width={ 31 }
            height={ 1 }
            depth={ 34 }
            position={[0, -0.34, 0]} />


          {/* South Wall: in & out */}
          <Wall
            id="wall-south-inner"
            repeat='1 20'
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


          {/* West Wall */}
            <Wall
              id="wall-west-inner"
              width={ 34 }
              height={ 22.66 }
              depth={ 0.1 }
              rotation={[0, 90, 0]}
              position={[15.5, 11.35, 0]} />
            <Wall
              id="wall-west-outer"
              width={ 34 }
              height={ 22.66 }
              depth={ 0.1 }
              rotation={[0, 90, 0]}
              position={[15.54, 11.35, 0]} />



          {/* North Wall */}
          <Wall
            id="wall-south-inner"
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


          {/* West Wall */}
          <Wall
            id="wall-east-inner"
            width={ 34 }
            height={ 22.66 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.40, 11.35, 0]} />
          <Wall
            id="wall-east-outer"
            width={ 34 }
            height={ 22.66 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.45, 11.35, 0]} />

          {/* BEGIN Warholian Texture Maps */}
          {/* BEGIN East Wall Textures */}
          <Entity id="west-wall-texture-group">

            <Entity
              id="west-wall-plane-0"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#west-wall-texture-0'
              }}
              rotation={[0, 90, 0]}
              position={[-15.34, 11.39, 0]}
              geometry={{
                primitive: 'plane',
                width: 34,
                height: 22.66
              }} />
            

          </Entity>
          {/* ENF East Wall Textures */}
          {/* END Warholian Texture Maps */}


        </Entity>
        {/* Room ends */}

        {/* Camera */}
        <Camera
          id="camera-kinetic"
          active={true}
          position={[-8.5, 7.45, 27]}
          userHeight={5}
          velocity={[0, 0, 10]}>
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
