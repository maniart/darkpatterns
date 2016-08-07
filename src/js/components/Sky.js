import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{primitive: 'sphere', radius: 100}}
          material={{color: "#EEE", shader: 'flat'}}
          scale="1 1 -1"/>
);
