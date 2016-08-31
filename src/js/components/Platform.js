import {Entity} from 'aframe-react';
import React    from 'react';

export default ({
  width = 1,
  height = 1,
  depth = 1,
  position=[0, 0, 0]
}) => (
  <Entity
    static-body=""
    geometry={{
      primitive: 'box',
      width,
      height,
      depth
    }}

    material={{
      color: '#ffffff',
      shader: 'flat'
    }}

    position={position}/>
);
