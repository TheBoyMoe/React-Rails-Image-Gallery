import React from 'react';
// import { fileUploader } from '../../utilities/api-helpers';
import axiosClient from '../../utilities/axiosClient';

class GalleryForm extends React.Component {
  state = {
    title: '',
    images: []
  }

  titleOnChangeHandler = (e) => {
    const title = e.target.value;
    this.setState({
      ...this.state,
      title: title
    });
  };

  fileSelectedHandler = (e) => {
    const fileList = e.target.files;
    const files = []
    for (let i = 0; i < fileList.length; i++) {
      files.push(fileList[i]);
    }
    this.setState({
      ...this.state,
      images: files
    });
  };

  fileUploadHandler = (e) => {
    e.preventDefault();
    const formData = this.buildFormData();

    axiosClient['post']('http://localhost:3001/api/v1/galleries', formData)
    .then(res => {
      const id = res.data.id;
      (id)? this.props.history.push(`/gallery/${id}`) : this.props.history.push('/gallery');
    })
    .catch(err => console.log(err));

    // TODO submit the request using Fetch Api //FIXME - DOES NOT WORK
    // fileUploader({'gallery': formData})
    //   .then(res => console.log(res));
  };

  buildFormData = () => {
    let formData = new FormData();
    formData.append('gallery[title]', this.state.title);
    this.state.images.forEach((file, i) => {
      formData.append(
        `gallery[images_attributes][${i}][file]`, file, file.name
      );
    });
    return formData;
  };

  fileCancelHandler = () => {
    this.props.history.push('/gallery');
  }

  renderSelectedImages = () => {
    const images = this.state.images;
    if (images.length === 0) return null;
    const list = images.map((image, i) => {
      return (
        <li key={i}>
          <img
            src={image.id ? image.url : URL.createObjectURL(image)}
            style={{ alignSelf: 'center' }}
          />
        </li>
      )
    })
    return (
      <ul className="gallery">
        {list}
      </ul>
    )
  }

  render() {
    return (
      <div className="GalleryForm">
        <form>
          <div className="form-group">
            <label>Title</label><br />
            <input
              type="text"
              placeholder="Add a title (required)"
              onChange={this.titleOnChangeHandler}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <input
              id="gallery_images"
              type="file"
              multiple={true}
              onChange={this.fileSelectedHandler}
              accept="image/*"
            />
          </div>
          {this.renderSelectedImages()}
          <div className="form-group">
            <button
              onClick={this.fileUploadHandler}
              className="btn btn-primary">Upload</button>
            <button
              onClick={this.fileCancelHandler}
              className="btn btn-default">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
};

export default GalleryForm;