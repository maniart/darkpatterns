import React   from 'react';

const Loader = ({ visible }) =>
  <div style={{
    zIndex: 9000,
    display: visible ? 'block' : 'none', 
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: '2em',
    textAlign: 'center'
    }}>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
      }}>
        Loading Dark Patterns ...
      </div>
    </div>;

  export default Loader;
