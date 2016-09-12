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
    universal-controls=""
    touch-controls=""
    hmd-controls=""
    mouse-controls=""
    look-controls=""
    wasd-controls=""

    kinematic-body=""
    jump-ability={{enableDoubleJump: true, distance: 3}}

    {...props}/>
);
/*
<a-entity id="camera" camera="active:true" universal-controls="" kinematic-body="" jump-ability="enableDoubleJump: true; distance: 3;" position="117.53998359625292 1.4515555555555555 -1.2450643819391507" velocity="0 0 0" gamepad-controls="" keyboard-controls="" touch-controls="" hmd-controls="" mouse-controls="" rotation="-11.344564343590337 -96.8298673771091 0">
<a-entity id="cursor" cursor="fuse: true; maxDistance: 5; timeout: 1" geometry="primitive: sphere; radius: 1;" material="color: red; opacity: 1;" position="0 -10 0" raycaster=""></a-entity>
  <a-animation attribute="position" begin="roof" dur="0" to="134 8 2.1"></a-animation>
  <a-animation attribute="position" begin="start" dur="0" to="125 1.8 2.1"></a-animation>
 </a-entity>

*/
