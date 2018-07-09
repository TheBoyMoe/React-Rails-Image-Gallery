import React from 'react';
// import { fileUploader } from '../../utilities/api-helpers';
import axiosClient from '../../utilities/axiosClient';

class GalleryForm extends React.Component {
  state = {
    title: '',
    images: [],
    numberOfSelectedImages: 0
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
      images: files,
      numberOfSelectedImages: files.length
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
        <li key={i} className="selected-image">
          <img src={URL.createObjectURL(image)} />
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
            <input
              type="text"
              placeholder="Give the collection a title (required)"
              onChange={this.titleOnChangeHandler}
              value={this.state.title}
            />
            <input
              id="gallery_images"
              type="file"
              multiple={true}
              onChange={this.fileSelectedHandler}
              accept="image/*"
              style={{
                width: 0.1,
                height: 0.1,
                opacity: 0,
                overflow: 'hidden',
                position: 'absolute',
                zIndex: -1
              }}
            />&nbsp;
             <label
              className="btn btn-success"
              htmlFor="gallery_images">
              <span className="glyphicon glyphicon-cloud-upload" />
              &nbsp; &nbsp;
              {this.state.numberOfSelectedImages === 0
                ? 'Upload Files'
                : `${this.state.numberOfSelectedImages} file${this.state.numberOfSelectedImages !== 1
                    ? 's'
                    : ''} selected`}
            </label>&nbsp;
            { (this.state.numberOfSelectedImages > 0)? (
              <div style={{display: 'inline-block'}}>
                <button
                  onClick={this.fileUploadHandler}
                  className="btn btn-primary">Upload</button>&nbsp;
                <button
                  onClick={this.fileCancelHandler}
                  className="btn btn-default">Cancel</button>
              </div>
            ) : null}
          </div>
          {this.renderSelectedImages()}
        </form>
      </div>
    );
  }
};

export default GalleryForm;