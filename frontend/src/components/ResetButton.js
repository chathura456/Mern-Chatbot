import React from 'react';

const ResetButton = ({ triggerNextStep, setChatbotKey }) => {
  const handleReset = () => {
    triggerNextStep({ trigger: 'account-type-question' });
    setChatbotKey(Date.now());  // Update the key to force re-render
  };

  return <button onClick={handleReset}>Reset Chat</button>;
};

export default ResetButton;
