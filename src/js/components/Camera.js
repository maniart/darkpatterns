import {Entity}     from 'aframe-react';
import React        from 'react';
import Wsgamepad    from './Wsgamepad';

export default ({
  position=[0, 0, 5],
  id="camera",
  active="false",
  userHeight="4.8",
  rotation=[0, 5, 0],
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
        ws-gamepad={{
          endpoint: "http://darkpatterns.io:2323/"
        }}
        look-controls=""
        universal-controls=""

        kinematic-body=""
        {...props}/>
    </Entity>


);
/*
  Todo:
  add back -
  ws-gamepad={{
    endpoint: "ws://127.0.0.1:7878"
  }}
*/
/*
  add back universal-controls=""
  gamepad-controls="" `universal-controls=""` to `Entity` to enable universal control again
*/
