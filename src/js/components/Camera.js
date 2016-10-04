import {Entity}     from 'aframe-react';
import React        from 'react';
import Wsgamepad    from './Wsgamepad';

export default ({
  position=[0, 0, 5],
  id="camera",
  active="false",
  userHeight="4.8",
  rotation=[0, 0, 0],
  far="10000",
  looksControlsEnabeld="true",
  fov="80",
  near="0.005",
  velocity=[3, 3, 3],
  ...props
}) => (

    <Entity position={[0, 5, 0]} static-body="">
      <Entity
        id={id}
        active={active}
        camera={{
          'user-height': userHeight,
          active,
          far,
          fov,
          near
        }}
        rotation={rotation}
        mouse-controls=""
        touch-controls=""
        hmd-controls=""
        ws-gamepad={{
          endpoint: "ws://192.168.0.14:7878"
        }}
        look-controls=""
        universal-controls=""
        gamepad-controls=""

        kinematic-body=""
        {...props}/>
    </Entity>


);
/*
  add back `universal-controls=""` to `Entity` to enable universal control again
*/
