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
import Loader       from './components/Loader';
import { scale }    from './utils';


/*
  TODO: create multiple scenes?
*/
class RootScene extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      solved: false,
      color: '#fff'
    };
  }

  onSceneReady () {
    this.setState({
      sceneReady: true
    });
  }
  componentDidMount () {
    const scene = document.querySelector('a-scene');
    if (scene.hasLoaded) {
      this.onSceneReady()
    } else {
      scene.addEventListener('loaded', this.onSceneReady.bind(this))
    }
    const cursor = document.querySelector('#cursor');
    const ui = document.querySelector('#ui-web-browser')
    console.log(ui);
    ui.addEventListener('mouseenter', ()=> {
      alert('hovering');
    });
  }
  render () {
    return (
      <div id="wrapper">

        <Loader visible={!this.state.sceneReady} />

      <Scene
          physics={{debug:true}}
          keyboard-shortcuts=""
          canvas=""
          vr-mode-ui={{enabled: true }}>

          <a-assets>
            <img id="starry-night-sky-texture"
              src="../assets/starry-night.jpg" />

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

            <img id="north-wall-texture-0"
              src="../assets/north-wall-textures/0.png" />
            <img id="north-wall-texture-1"
              src="../assets/north-wall-textures/1.png" />
            <img id="north-wall-texture-2"
              src="../assets/north-wall-textures/2.png" />
            <img id="north-wall-texture-3"
              src="../assets/north-wall-textures/3.png" />

            <img id="south-wall-texture-0"
              src="../assets/south-wall-textures/0.png" />
            <img id="south-wall-texture-1"
              src="../assets/south-wall-textures/1.png" />
            <img id="south-wall-texture-2"
              src="../assets/south-wall-textures/2.png" />
            <img id="south-wall-texture-3"
              src="../assets/south-wall-textures/3.png" />
            <img id="south-wall-texture-4"
              src="../assets/south-wall-textures/4.png" />
            <img id="south-wall-texture-5"
              src="../assets/south-wall-textures/5.png" />

            <a-asset-item id="key" src="../assets/key.dae" />


          </a-assets>

          <Entity
            id="outside"
            position={[0, -0.5, 0]}>
            <Platform
              id="earth"
              src="#starry-night-sky-texture"
              width={200}
              height={1}
              depth={200} />

              <a-collada-model
                src="#key"
                scale="0.02 0.02 0.02"
                rotation="0 0 90"
                position={this.state.solved ? "4.78 5.72 71.61" : "4.78 17.72 71.61"}>
                <a-animation
                 attribute="rotation"
                 dur="20000"
                 fill="both"
                 ease="linear"
                 to="0 360 90"
                 repeat="indefinite"></a-animation>
              </a-collada-model>



          {/*
            <Light
              id="key-light"
              type="point"
              decay={0}
              distance={0}
              intensity={0.8}
              position={[0, 38.5, 73.95]}
              angle={60} />*/}

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


          <Entity
            id="floor"
            material={{
              shader: 'standard',
              color: '#fff'
            }}
            rotation={[-90, 0, -90]}
            position={[0, 0.06, 0]}
            geometry={{
              primitive: 'plane',
              width: 34,
              height: 31
            }} />

            <Entity
              className="interactive"
              id="ui-web-browser"

              geometry={{
                primitive: 'box',
                width: 4,
                height: 2.88,
                depth: 0.2
              }}

              rotation={[0, 90, 0]}

              material={{
                color: this.state.color,
                shader: 'flat'
              }}

              position={[-1.95, 6.91, 1.65]}/>

            {/* South Wall: in & out */}

            <Wall
              id="wall-south-inner"
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
            <Wall
              id="wall-south-top-door-inner"
              width={ 10.10 }
              height={ 5.32 }
              depth={ 0.1 }
              position={[10.54, 19.21, 17]} />
            <Wall
              id="wall-south-top-door-outer"
              width={ 10.10 }
              height={ 5.32 }
              depth={ 0.1 }
              position={[10.54, 19.21, 17.04]} />




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
                rotation={[-90, 90, 0]}
                position={[-9.45, 0.27, 0]}
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
            {/* END East Wall Textures */}


            {/* BEGIN North Wall Textures */}

            <Entity id="north-wall-texture-group">

              <Entity
                id="north-wall-plane-0"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#north-wall-texture-0'
                }}
                rotation={[0, 0, 0]}
                position={[0.57, 11.41, -16.58]}
                geometry={{
                  primitive: 'plane',
                  width: 27.56,
                  height: 16.14
                }} />


                <Entity
                  id="north-wall-plane-1"
                  material={{
                    shader: 'standard',
                    color: '#fff',
                    src: '#north-wall-texture-1'
                  }}
                  rotation={[0, 0, 0]}
                  position={[-3.49, 7.23, -16.7]}
                  geometry={{
                    primitive: 'plane',
                    width: 21.18,
                    height: 13.30
                  }} />

                <Entity
                  id="north-wall-plane-2"
                  material={{
                    shader: 'standard',
                    color: '#fff',
                    src: '#north-wall-texture-2'
                  }}
                  rotation={[0, 0, 0]}
                  position={[-8.83, 2.65, -16.75]}
                  geometry={{
                    primitive: 'plane',
                    width: 13.14,
                    height: 6.24
                  }} />

                <Entity
                  id="north-wall-plane-3"
                  material={{
                    shader: 'standard',
                    color: '#fff',
                    src: '#north-wall-texture-3'
                  }}
                  rotation={[-90, 0, 0]}
                  position={[5.31, 0.4, 2.75]}
                  geometry={{
                    primitive: 'plane',
                    width: 13.26,
                    height: 14.90
                  }} />


            </Entity>
            {/* END North Wall Textures */}


            {/* BEGIN South Wall Textures */}

            <Entity id="south-wall-texture-group">

              <Entity
                id="south-wall-plane-2"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#south-wall-texture-2'
                }}
                rotation={[0, -180, 0]}
                position={[-7.63, 12.48, 15.05]}
                geometry={{
                  primitive: 'plane',
                  width: 15.4,
                  height: 11.86
                }} />

              <Entity
                id="south-wall-plane-3"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#south-wall-texture-3'
                }}
                rotation={[0, -180, 0]}
                position={[-5.43, 15.61, 16.78]}
                geometry={{
                  primitive: 'plane',
                  width: 15.4,
                  height: 11.86
                }} />

              <Entity
                id="south-wall-plane-1"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#south-wall-texture-1'
                }}
                rotation={[0, -180, 0]}
                position={[-6.02, 4.94, 14.92]}
                geometry={{
                  primitive: 'plane',
                  width: 12.16,
                  height: 8.98
                }} />

              {/*
              <Entity
                id="south-wall-plane-4"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#south-wall-texture-4'
                }}
                rotation={[0, -180, 0]}
                position={[-6.5, 3.02, 12.84]}
                geometry={{
                  primitive: 'plane',
                  width: 12.04,
                  height: 6.7
                }} /> */}

              <Entity
                id="south-wall-plane-5"
                material={{
                  shader: 'standard',
                  color: '#fff',
                  src: '#south-wall-texture-5'
                }}
                rotation={[0, -180, 0]}
                position={[-0.21, 6.46, 14.27]}
                geometry={{
                  primitive: 'plane',
                  width: 14.20,
                  height: 11.68
                }} />






            </Entity>
            {/* END South Wall Textures */}
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

            <Cursor fuse="false" />

          </Camera>


          <Sky src="#starry-night-sky-texture" />

          <Light
            id="light-room-ceiling"
            type="point"
            decay={0}
            distance={0}
            intensity={0.4}
            position={[-7.9, 19.3, 0]}
            angle={60} />

          { /*
          <Light
            id="window-right"
            type="point"
            decay={0}
            distance={0}
            intensity={0.3}
            position={[-18.48, 9.52, -4.59]}
            angle={60} /> */}

          <Light
            id="light-moon"
            type="ambient"
            decay={0}
            distance={0}
            intensity={0.8}
            position={[0, 77.2, 0]}
            angle={60} />

        </Scene>

      </div>

    );
  }
}

ReactDOM.render(
  <RootScene />,
  document.querySelector('.scene-container')
);
