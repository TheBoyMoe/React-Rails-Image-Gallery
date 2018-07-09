import React from 'react';
import GalleryForm from './Form';

const galleryNew = (props) => {
  return(
    <div className="App container">
      <h2>Create a new Collection</h2>
      <GalleryForm 
        history={ props.history }/>
    </div>  
  );
};
export default galleryNew;