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

        <a-assets>
          <img id="east-wall-texture"
            src="../img/east-wall-texture.png" />
        </a-assets>

        <Entity
          id="outside"
          position={[0, -0.1, 0]}>
          <Platform
            width={200}
            height={1}
            depth={200}
            color="green" />
        </Entity>

        <Entity
          id="room"
          position={[0, 0, 0]}>

          <Roof
            width={ scale(155) }
            height={ 1 }
            depth={ scale(170) }
            position={[0, 14.5, 0]} />

          <Platform
            width={ scale(155) }
            height={1}
            depth={ scale(170) }
            position={[0, 0, 0]} />

          {/* South Wall */}
          <Wall
            width={ scale(39 + 55 + 24) }
            height={ scale(110) }
            depth={ 0.1 }
            position={[-3.68, 3, 17]} />

          {/* West Wall: Segment I */}
          <Wall
            width={ scale(30) }
            height={ scale(110) }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 3, 14.0]} />

          {/* West Wall: Segment II: Bottom of window */}
          <Wall
            width={ scale(34) }
            height={ scale(28) }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 0.5, 8]} />

          {/* West Wall: Segment II: Top of window */}
          <Wall
            width={ scale(34) }
            height={ scale(17) }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 12.3, 8]} />

          {/* West Wall: Segment III */}
          <Wall
            width={ scale(48) }
            height={ scale(110) }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 3, -0.1]} />

          {/* West Wall: Segment IV: Bottom of window */}
          <Wall
            width={ scale(34) }
            height={ scale(28) }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 0.5, -8.2]} />

          {/* West Wall: Segment IV: Top of window */}
          <Wall
            width={ scale(34) }
            height={ scale(17) }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 12.3, -8.2]} />

          {/* West Wall: Segment V */}
          <Wall
            width={ scale(27) }
            height={ scale(110) }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[-15.5, 3, -14.3]} />

          {/* South Wall */}
          <Wall
            width={ scale(155) }
            height={ scale(110) }
            depth={ 0.1 }
            position={[0, 3, -17]} />

          {/* East Wall */}
          <Wall
            src="#east-wall-texture"
            width={ scale(170) }
            height={ scale(110) }
            depth={ 0.1 }
            rotation={[0, 90, 0]}
            position={[15.5, 3, 0]} />

        </Entity>

        <Camera
          position={[0, 2, -10]}
          userHeight={6}
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
