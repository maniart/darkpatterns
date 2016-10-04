import {Entity} from 'aframe-react';
import React    from 'react';

// type values: One of ambient, directional, hemisphere, point, spot
export default ({
  type="ambient",
  color="#fff",
  intensity="0.5",
  decay="2",
  position=[0, 0, 0],
  distance="50",
  ...props
}) => {
  return (
    <Entity
      light={{
        type,
        distance,
        decay,
        intensity,
        color
      }}
      position={position}

      {...props}/>
  );
}
