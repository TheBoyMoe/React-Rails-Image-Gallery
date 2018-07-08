import React from 'react';

class GalleryForm extends React.Component {
  state = {
    title: '',
    images: []
  }
  componentDidMount(){
    console.log(this.state)
  }
  titleOnChangeHandler = (e) => {
    const title = e.target.value;
    this.setState({
      ...this.state,
      title: title
    });
  };

  fileSelectedHandler = (e) => {
    const files = e.target.files;
    this.setState({
      ...this.state,
      images: files
    });
  };

  fileUploadHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  fileCancelHandler = () => {
    this.props.history.push('/gallery');
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
          <div>
            <input
              id="gallery_images"
              type="file"
              multiple={ true }
              onChange={ this.fileSelectedHandler }
              accept="image/*"
            />
          </div>
          <div>
            <button
              onClick={ this.fileUploadHandler }
              className="btn btn-primary">Save</button>
            <button 
              onClick={ this.fileCancelHandler }
              className="btn btn-default">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
};

export default GalleryForm;