import {Entity} from 'aframe-react';
import React    from 'react';

export default ({
  width = 15.5,
  height = 1,
  depth = 17,
  color="rgb(240, 240, 240)",
  rotation=[0, 0, 0],
  shader="standard",
  position=[0, 7, -3.1]
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
