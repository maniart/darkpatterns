import {Entity} from 'aframe-react';
import React    from 'react';

export default ({
  color='#73CFF0',
  src='',
  shader='standard'
}) => (
  <Entity
    geometry={{
      primitive: 'sphere',
      radius: 100,

    }}

    material={{
      color,
      shader,
      src
    }}

    scale={[1, 1, -1]} />
);
