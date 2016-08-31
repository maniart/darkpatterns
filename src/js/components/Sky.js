import {Entity} from 'aframe-react';
import React    from 'react';

export default ({ color='#73CFF0' }) => (
  <Entity
    geometry={{
      primitive: 'sphere',
      radius: 100
    }}

    material={{
      color,
      shader: 'flat'
    }}

    scale={[1, 1, -1]} />
);
