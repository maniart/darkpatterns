import {Entity} from 'aframe-react';
import React    from 'react';

// type values: One of ambient, directional, hemisphere, point, spot
export default ({
  type="ambient",
  color="#eee",
  intensity="0.5",
  decay="2",
  position=[0, 0, 0],
  distance="50",
  ...props
}) => (
  <Entity
    light=""
    position={position}
    distance={distance}
    type={type}
    decay={decay}
    intensity={intensity}
    color={color}

    {...props}/>
);
