import {Entity} from 'aframe-react';
import React    from 'react';

export default ({
  width = 1,
  height = 1,
  depth = 1,
  color="rgb(240, 240, 240)",
  rotation=[0, 0, 0],
  shader="flat",
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
      shader
    }}

    position={position}/>
);
