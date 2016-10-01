import {Entity}     from 'aframe-react';
import React        from 'react';
import Wsgamepad    from './Wsgamepad';

export default ({
  position=[0, 0, 0],
  id="camera",
  active="false",
  userHeight="4.8",
  velocity=[0, 0, 3],
  ...props
}) => (
  <Entity
    id={id}
    active={active}
    camera={{
      userHeight,
      active
    }}
    velocity={velocity}
    position={position}
    touch-controls=""
    hmd-controls=""
    mouse-controls=""
    ws-gamepad={{
      endpoint: "ws://192.168.0.14:7878"
    }}
    look-controls=""
    universal-controls=""
    gamepad-controls=""
    kinematic-body=""
    jump-ability={{
      enableDoubleJump: true,
      distance: 3
    }}

    {...props}/>
);
/*
  add back `universal-controls=""` to `Entity` to enable universal control again
*/
