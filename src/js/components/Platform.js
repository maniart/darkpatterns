import {Entity} from 'aframe-react';
import React    from 'react';

export default ({
  width = 1,
  height = 1,
  depth = 1,
  src='',
  repeat=true,
  shader = 'standard',
  color = '#fff',
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
      color,
      shader,
      src,
      repeat
    }}

    position={position} />
);
