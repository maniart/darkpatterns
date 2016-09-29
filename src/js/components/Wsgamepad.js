import {Entity} from 'aframe-react';
import React    from 'react';
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

  buttons: {
    right: false,
    left: false,
    up: false,
    down: false,
    a: false,
    b: false,
    start: false,
    select: false
  },
  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    console.log('_____ WS GAME PAD INIT. Endpoint is: ', this);
    // setup websockets
    const host = this.data.endpoint;
    this.ws = new WebSocket(host);
    this.ws.onmessage = function({data}) {
      console.log(JSON.parse(data));
      if(data.num === 0 && data.name === 'down') {
        this.buttons.a = true;
      }
    };
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    console.log(this.el);
  },

  tick: function(t, dt) {
    const mesh = this.el.getObject3D('mesh');
    // Update mesh animations.
    if (mesh && mesh.update) { mesh.update(delta / 1000); }
    this.updatePos(dt);
    this.updateButtons();
  },

  updatePos(dt) {

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
