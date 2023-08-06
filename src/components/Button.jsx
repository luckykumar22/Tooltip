import React from 'react';

const Button = ({ text }) => {
  return (
    <button style={{ padding: '10px', backgroundColor: '#f2c34e', border: 'none' }}>
      {text}
    </button>
  );
};

export default Button;