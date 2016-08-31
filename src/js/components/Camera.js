import {Entity} from 'aframe-react';
import React    from 'react';

export default ({position=[0, 0, 0], ...props}) => (
  <Entity>
    <Entity
      camera=""
      position={position}
      universal-controls
      kinematic-body
      jump-ability=""
      look-controls=""
      wasd-controls=""
      {...props}/>
  </Entity>
);
