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
        physics={{debug:false}}
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
          <img id="west-wall-texture-3"
            src="../assets/west-wall-textures/3.png" />
          <img id="west-wall-texture-4"
            src="../assets/west-wall-textures/4.png" />
          <img id="west-wall-texture-5"
            src="../assets/west-wall-textures/5.png" />
          <img id="west-wall-texture-6"
            src="../assets/west-wall-textures/6.png" />
          <img id="west-wall-texture-7"
            src="../assets/west-wall-textures/7.png" />
          <img id="west-wall-texture-8"
            src="../assets/west-wall-textures/8.png" />
          <img id="west-wall-texture-9"
            src="../assets/west-wall-textures/9.png" />


          <img id="east-wall-texture-0"
            src="../assets/east-wall-textures/0.png" />
          <img id="east-wall-texture-1"
            src="../assets/east-wall-textures/1.png" />
          <img id="east-wall-texture-2"
            src="../assets/east-wall-textures/2.png" />
          <img id="east-wall-texture-3"
            src="../assets/east-wall-textures/3.png" />
          <img id="east-wall-texture-4"
            src="../assets/east-wall-textures/4.png" />
          <img id="east-wall-texture-5"
            src="../assets/east-wall-textures/5.png" />
          <img id="east-wall-texture-6"
            src="../assets/east-wall-textures/6.png" />


        </a-assets>

        <Entity
          id="outside"
          position={[0, -0.5, 0]}>
          <Platform
            id="earth"
            color="#000"
            width={200}
            height={1}
            depth={200} />
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
          { /*
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
            */ }


          {/* East Wall */}

          <Wall
            id="wall-east-inner"
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
            id="wall-west-inner"
            width={ 34 }
            height={ 22.66 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.40, 11.35, 0]} />
          <Wall
            id="wall-west-outer"
            width={ 34 }
            height={ 22.66 }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.45, 11.35, 0]} />


          {/* BEGIN Hockneyan Texture Maps */}
          {/* BEGIN West Wall Textures */}

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

            <Entity
              id="west-wall-plane-1"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#west-wall-texture-1'
              }}
              scale={[0.93, 0.83, 1]}
              rotation={[0, 90, 0]}
              position={[-11.50, 8.59, 0.43]}
              geometry={{
                primitive: 'plane',
                width: 34,
                height: 22.66
              }} />

            <Entity
              id="west-wall-plane-2"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#west-wall-texture-2'
              }}
              scale={[0.43, 0.46, 1]}
              rotation={[0, 90, 0]}
              position={[-9.5, 9.53, 0.61]}
              geometry={{
                primitive: 'plane',
                width: 34,
                height: 22.66
              }} />

            <Entity
              id="west-wall-plane-3"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#west-wall-texture-3'
              }}
              scale={[1, 0.2, 1]}
              rotation={[-80, 90, 0]}
              position={[-9.45, 1.27, 0]}
              geometry={{
                primitive: 'plane',
                width: 34,
                height: 22.66
              }} />

            <Entity
              id="west-wall-plane-4"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#west-wall-texture-4'
              }}
              scale={[1, 1, 1]}
              rotation={[90, 90, 0]}
              position={[-4.14, 20, 0.0]}
              geometry={{
                primitive: 'plane',
                width: 34,
                height: 22.66
              }} />

            <Entity
              id="west-wall-plane-5"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#west-wall-texture-5'
              }}
              scale={[1, 1, 1]}
              rotation={[90, 90, 0]}
              position={[4.14, 20.88, 0.0]}
              geometry={{
                primitive: 'plane',
                width: 34,
                height: 22.66
              }} />

              <Entity
                id="west-wall-plane-6"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#west-wall-texture-6'
                }}
                scale={[0.43, 0.46, 1]}
                rotation={[0, 90, 0]}
                position={[-9.2, 8, 0.61]}
                geometry={{
                  primitive: 'plane',
                  width: 34,
                  height: 22.66
                }} />

              <Entity
                id="west-wall-plane-7"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#west-wall-texture-7'
                }}
                scale={[0.43, 0.46, 1]}
                rotation={[0, 90, 0]}
                position={[-9.66, 9.33, 0.61]}
                geometry={{
                  primitive: 'plane',
                  width: 34,
                  height: 22.66
                }} />

              <Entity
                id="west-wall-plane-8"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#west-wall-texture-8'
                }}
                scale={[1, 1, 1]}
                rotation={[0, 90, 0]}
                position={[-11.37, 12.63, 10.33]}
                geometry={{
                  primitive: 'plane',
                  width: 11.64,
                  height: 14.58
                }} />

              <Entity
                id="west-wall-plane-9"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#west-wall-texture-9'
                }}
                scale={[1, 1, 1]}
                rotation={[0, 90, 0]}
                position={[-11.46, 7.23, 12.29]}
                geometry={{
                  primitive: 'plane',
                  width: 7.16,
                  height: 11.56
                }} />



          </Entity>


          {/* BEGIN East Wall Textures */}

          <Entity id="east-wall-texture-group">

            <Entity
              id="east-wall-plane-0"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#east-wall-texture-0'
              }}
              rotation={[0, -90, 0]}
              position={[15.34, 14.44, 0]}
              geometry={{
                primitive: 'plane',
                width: 24.14,
                height: 14.22
              }} />

            <Entity
              id="east-wall-plane-1"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#east-wall-texture-1'
              }}
              rotation={[0, -90, 0]}
              position={[15.0, 14, 0]}
              geometry={{
                primitive: 'plane',
                width: 22.48,
                height: 13.54
              }} />

            <Entity
              id="east-wall-plane-2"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#east-wall-texture-2'
              }}
              rotation={[0, -90, 0]}
              position={[14.5, 10, 0]}
              geometry={{
                primitive: 'plane',
                width: 25.02,
                height: 14.98
              }} />

            <Entity
              id="east-wall-plane-3"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#east-wall-texture-3'
              }}
              rotation={[0, -90, 0]}
              position={[14.49, 5.42, 0.05]}
              geometry={{
                primitive: 'plane',
                width: 22.98,
                height: 9.52
              }} />

            <Entity
              id="east-wall-plane-4"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#east-wall-texture-4'
              }}
              rotation={[-85, -90, 0]}
              position={[9.65, 0.77, 0.05]}
              geometry={{
                primitive: 'plane',
                width: 22.98,
                height: 9.52
              }} />

            <Entity
              id="east-wall-plane-5"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#east-wall-texture-5'
              }}
              rotation={[-90, -90, 0]}
              position={[6.68, 0.23, 0.66]}
              geometry={{
                primitive: 'plane',
                width: 21.64,
                height: 11.28
              }} />

            <Entity
              id="east-wall-plane-6"
              material={{
                shader: 'standard',
                color: '#fff',
                src: '#east-wall-texture-6'
              }}
              rotation={[-90, -90, 0]}
              position={[-0.13, 0.2, 1.16]}
              geometry={{
                primitive: 'plane',
                width: 22.98,
                height: 9.52
              }} />

          </Entity>
          {/* END east Wall Textures */}
          {/* END Hockneyan Texture Maps */}


        </Entity>
        {/* Room ends */}

        {/* Camera */}
        <Camera
          id="camera-kinetic"
          active={true}
          rotation={[0, -80, 0]}
          position={[-9.45, 5, 12.55]}
          userHeight={5}
          velocity={[0, -83.08, 10]}>
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
