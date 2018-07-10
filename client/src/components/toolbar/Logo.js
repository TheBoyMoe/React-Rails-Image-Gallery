import React from 'react';
import { Link } from 'react-router-dom';

import cameraLogo from '../../assets/images/camera-logo.svg';

const logo = () => {
  return (
    <div className="Logo">
      <Link to="/gallery">
        <img src={ cameraLogo } alt="Camera Logo" />
      </Link>
      <p className="title">Usplash Images</p>
    </div>
  );
};

export default logo;