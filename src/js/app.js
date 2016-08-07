import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texture: '#popup-1'
    }
  }

  changeTexture = () => {
    const sources = ['#popup-1', '#popup-2', '#popup-3', '#popup-4', '#popup-5', '#popup-6'];
    let texture = sources[Math.floor(Math.random() * sources.length)];
    console.log('__ changing texture to: ', texture);
    this.setState({
      texture
    });
  };

  render () {
    return (
      <Scene>
        <Camera><Cursor/></Camera>

        <Sky/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>

        <Entity geometry="primitive: box" material={{src: this.state.texture}}
                onClick={this.changeTexture}
                position="0 0 -5">
        <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
