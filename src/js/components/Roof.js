import {Entity} from 'aframe-react';
import React    from 'react';

export default ({
  width = 15.5,
  height = 1,
  depth = 17,
  src="",
  color='#fff',
  rotation=[0, 0, 0],
  shader='standard',
  position=[0, 0, 0]
}) => (
  <Entity
    static-body=""
    geometry={{
      primitive: 'box',
      width,
      height,
      depth,
    }}

    rotation={rotation}

    material={{
      color,
      shader,
      src
    }}

    position={position}/>
);
