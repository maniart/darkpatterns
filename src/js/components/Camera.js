import {Entity} from 'aframe-react';
import React    from 'react';

export default ({
  position=[0, 0, 0],
  id="camera",
  active="true",
  userHeight="4.8",
  velocity=[0, 0, 3],
  ...props
}) => (
  <Entity
    id={id}
    active={active}
    camera=""
    user-height={userHeight}
    position={position}
    velocity={velocity}
    touch-controls=""
    hmd-controls=""
    mouse-controls=""
    look-controls=""
    universal-controls=""

    kinematic-body=""
    jump-ability={{enableDoubleJump: true, distance: 3}}

    {...props}/>
);
