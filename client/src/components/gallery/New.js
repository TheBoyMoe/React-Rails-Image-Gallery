import React from 'react';
import GalleryForm from './Form';

const galleryNew = (props) => {
  return(
    <div className="App">
      <h2>Add a new gallery</h2>
      <GalleryForm 
        history={ props.history }/>
    </div>  
  );
};
export default galleryNew;