import React from 'react';

class GalleryForm extends React.Component {
  state = {
    title: ''
  }
  
  handleOnChange = () => {
    // TODO update state
  }

  render(){
    return (
      <div className="GalleryForm">
        <form>
          <label>Title</label>
          <input 
            type="text"
            onChange={ this.handleOnChange }
            value={ this.state.title }
          />
        </form>
      </div>
    );
  }
};

export default GalleryForm;