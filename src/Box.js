import React from 'react';

const Box = ({ color, text }) => {
  return (
    <div style={{ backgroundColor: color, width: '100px', height: '100px' }}>
      {text}
    </div>
  );
};

export default Box;
