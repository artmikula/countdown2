import React from 'react';

const Marbles = ({ days }) => {

  const marbles = [];
  for (let i = 0; i < days; i++) {
    const color = `hsl(${360 / days * i}, 100%, 50%)`;
    const color2 = function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
      }
    marbles.push(
      <div key={i} style={{
        background: color2(),
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'inline-block',
        margin: '10px',
        boxShadow: `0 0 10px ${color}`,
        filter: 'blur(1px)'
      }} />
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {marbles}
    </div>
  );
};

export default Marbles;