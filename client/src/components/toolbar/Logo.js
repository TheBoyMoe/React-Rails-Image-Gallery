import React from 'react';
import cameraLogo from '../../assets/images/camera-logo.svg';

const logo = () => {
  return (
    <div className="Logo">
      <img src={ cameraLogo } alt="Camera Logo" />
    </div>
  );
};

export default logo;