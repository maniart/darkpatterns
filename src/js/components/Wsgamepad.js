import {Entity} from 'aframe-react';
import React    from 'react';

const THREE = window.THREE;
/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}


/**
 * Example component for A-Frame.
 */
AFRAME.registerComponent('ws-gamepad', {
  schema: {
    endpoint: {
      type: 'string',
      default: 'ws://127.0.0.1:7878'
    }
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  ws: null,


  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    this.forward = false;
    this.backward = false;
    this.left = false;
    this.right = false;
    // console.log('_____ WS GAME PAD INIT. Endpoint is: ', this);
    // Movement
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.direction = new THREE.Vector3(0, 0, 0);
    // setup websockets
    this.buttonStates = {};
    this.axisState = [];
    const host = this.data.endpoint;
    const self = this;
    this.ws = new WebSocket(host);
    this.ws.onmessage = function({data}) {
      //console.log(self.el.emit)
      let parsedData = JSON.parse(data);
      // console.log(JSON.parse(data));
      if (parsedData.name === 'move' && parsedData.value === 1 && parsedData.axis === 1) {
        console.log('Vetical arrow Backward')
        self.backward = true;
      }
      if (parsedData.name === 'move' && parsedData.value === -1 && parsedData.axis === 1) {
        console.log('Vetical arrow Forward')
        self.forward = true
      }
      // stopped moving back and forth
      if (parsedData.name === 'move' && Math.floor(Math.abs(parsedData.value)) ===  0 && parsedData.axis === 1) {
        console.log('Stopped')
        self.backward = false;
        self.forward = false;
      }


    };
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    //console.log(this.el);
  },

  tick: function(t, dt) {
    if (this.forward) {
      this.updatePosition({dx: 0, dy: 0, dz: -0.1});
    }
    if(this.backward) {
      this.updatePosition({dx: 0, dy: 0, dz: 0.1});
    }

    // this.updatePosition(dt);
    // this.updateButtonState();
    //this.updatePosition();
    //var mesh = this.el.getObject3D('mesh');
    //if (!mesh) { return; }
    //if (mesh.update) { mesh.update(delta / 1000); }
    //this.updatePose();
    //this.updateButtons();
  },


  updatePosition(value) {
    const data = this.data;
    // const { acceleration, easing, rollAxis, pitchAxis } = data;
    // console.log(acceleration, easing, rollAxis, pitchAxis);

    const el = this.el;
    const position = el.getComputedAttribute('position');
    let { x, y, z} = position;
    let { dx, dy, dz} = value;
    console.log(dx, dy, dz);
    el.setAttribute('position', {
      x: x + dx,
      y: y + dy,
      z: z + dz
    });

  },
  updateButtons() {

  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () {
    // close websocket connection
    this.ws && this.ws.close();
  },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { }
});

export default ({
  endpoint
}) => (
  <Entity
    ws-gamepad={{
      endpoint: endpoint
    }} />
);
