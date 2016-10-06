import {Entity} from 'aframe-react';
import React    from 'react';
var io = require('socket.io-client');

const THREE = window.THREE;
const MAX_DELTA = 0.2; // ms
const PI_2 = Math.PI / 2;
/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}


/**
 * WebSocket gamepad component
 */
AFRAME.registerComponent('ws-gamepad', {
  schema: {
    endpoint: {
      type: 'string',
      default: 'http://127.0.0.1:2323'
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
    // state
    this.cursor = document.querySelector('a-entity[cursor]');
    this.forward = false;
    this.backward = false;
    this.left = false;
    this.right = false;

    this.heading = new THREE.Euler(0, 0, 0, 'YXZ');


    // cache
    const abs = Math.abs;
    const floor = Math.floor;

    this.velocity = new THREE.Vector3();
    // Rotation
    this.pitch = new THREE.Object3D();
    this.yaw = new THREE.Object3D();
    this.yaw.position.y = 10;
    this.yaw.add(this.pitch);
    this.heading = new THREE.Euler(0, 0, 0, 'YXZ');



    // Movement
    //this.velocity = new THREE.Vector3(0, 0, 0);
    //this.direction = new THREE.Vector3(0, 0, 0);

    // setup websockets
    // this.buttonStates = {};
    // this.axisState = [];
    const host = this.data.endpoint;
    const self = this;

    this.socket = io.connect(host, {reconnect: true});
    this.socket.on('connect', () => {
      console.log('gamepad connected to socket.io server');
      self.socket.on('down', ({id, num, name}) => {
        console.log(id, num, name);
        if(num === 0 && name === 'down') {
          console.log(this.cursor);
          self.cursor.emit('click');
        }
        if(num === 1 && name === 'down') {

        }
        if(num === 9 && name === 'down') {
          // pause
          console.log('pause')
          self.el.emit('pause');
        }
      });

      // self.socket.on('up', ({id, num, name}) => {
      //     console.log(id, num, name);
      // });

      self.socket.on('move', ({id, axis, value, name}) => {
        if (axis === 1) {
          if (value === 1) {
            self.backward = true;
          } else if (value === -1) {
            self.forward = true;
          } else {
            self.forward = false;
            self.backward = false;
          }
        // left - right movement
        } else if(axis === 0) {
          if (value === -1) {
            self.right = true;
          } else if(value === 1) {
            self.left = true;
          } else {
            self.right = false;
            self.left = false;
          }
        }
      });
    });

  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    //console.log(this.el);
  },

  tick: function(t, dt) {
    if (!dt) { return; }
    //const { x: degX, y: degY, z: degZ } = this.el.getAttribute('rotation');
    if (this.forward) {
      this.velocity.set(0, 0, -0.1);
      //this.updatePosition({dx: 0, dy: 0, dz: -0.1});
    }
    if(this.backward) {
      this.velocity.set(0, 0, 0.1);
      //this.updatePosition({dx: 0, dy: 0, dz: 0.1});
    }
    if (this.right) {
      this.velocity.set(-0.1, 0, 0);
      //this.updatePosition({dx: -0.1, dy: 0, dz: 0});
    }
    if(this.left) {
      this.velocity.set(0.1, 0, 0);
      //this.updatePosition({dx: 0.1, dy: 0, dz: 0});
    }
    if(!this.left && !this.right && !this.forward && !this.backward) {
      this.velocity.set(0, 0, 0);
    }
    this.updatePosition();
  },



  updatePosition() {
    // console.log('------ ', this.el.getAttribute('rotation'))
    const { x: degX, y: degY, z: degZ } = this.el.getAttribute('rotation');
    const el = this.el;
    this.heading.set(
      THREE.Math.degToRad(degX),
      THREE.Math.degToRad(degY),
      0
    );
    // console.log(this.heading);
    const position = el.getComputedAttribute('position');
    let { x, y, z } = position;
    // let { dx, dy, dz } = value;
    const pos = this.velocity.applyEuler(this.heading);
    // console.log(pos)
    el.setAttribute('position', {
      x: (x + pos.x),
      y: (y),
      z: (z + pos.z)
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
