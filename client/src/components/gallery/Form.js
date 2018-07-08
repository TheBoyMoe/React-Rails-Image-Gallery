import React from 'react';

class GalleryForm extends React.Component {
  state = {
    title: ''
  }
  
  titleOnChangeHandler = (e) => {
    const title = e.target.value;
    this.setState({
      ...this.state,
      title: title
    });
  };

  fileSelectedHandler = (e) => {
    
  };

  fileUploadHandler = () => {

  }

  fileCancelHandler = () => {

  }

  render(){
    return (
      <div className="GalleryForm">
        <form>
          <div>
            <label>Title</label>
            <input 
              type="text"
              onChange={ this.titleOnChangeHandler }
              value={ this.state.title }
            />
          </div>
        </form>
      </div>
    );
  }
};

export default GalleryForm;