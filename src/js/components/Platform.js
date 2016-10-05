import {Entity} from 'aframe-react';
import React    from 'react';

export default ({
  width = 1,
  height = 1,
  depth = 1,
  src='',
  visible='true',
  repeat=true,
  shader = 'flat',
  color = '#000',
  position=[0, 0, 0]
}) => (
  <Entity
    static-body=""

    visible={visible}

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
