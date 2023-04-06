import React from 'react';
import Box from './Box';

const Boxes = () => {
  const boxData = [
    { color: 'red', text: 'Box 1' },
    { color: 'orange', text: 'Box 2' },
    { color: 'yellow', text: 'Box 3' },
    { color: 'green', text: 'Box 4' },
    { color: 'blue', text: 'Box 5' },
    { color: 'indigo', text: 'Box 6' },
    { color: 'violet', text: 'Box 7' },
    { color: 'pink', text: 'Box 8' },
    { color: 'brown', text: 'Box 9' },
    { color: 'black', text: 'Box 10' },
    { color: 'gray', text: 'Box 11' }
  ];

  return (
    <div>
      {boxData.map(({ color, text }) => (
        <Box key={color} color={color} text={text} />
      ))}
    </div>
  );
};

export default Boxes;
