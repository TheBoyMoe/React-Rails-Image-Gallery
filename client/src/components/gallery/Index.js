import React from 'react';

class Gallery extends React.Component {
  state = {
    isMounted: false,
    galleries: []
  }

  componentDidMount(){
    this.setState({
      isMounted: true
    }, this.fetchGalleries())
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }
  
  fetchGalleries = () => {
    // TODO make fetch call 
  }

  renderImageGallery = () => {
    const galleries = this.state.galleries;
    let images = [];
    galleries.forEach((gallery) => {
      images.push({galleryId: gallery.id, image: gallery.image_files[0]})
    })
    images = images.sort(this.reverseImagesOrder);

    return images.map(obj => {
      if (obj.image) {
        return (<li className="image" key={ obj.galleryId }>
              <a href={`/gallery/${obj.galleryId}`}>
                <img src={ obj.image.url } alt={ obj.image.name }/>
              </a>
            </li>
          );
      }
    })
  };

  reverseImagesOrder = (a, b) => {
    if(a.galleryId < b.galleryId) return 1;
    if(a.galleryId > b.galleryId) return -1;
    return 0;
  }

  render(){
    return(
      <div className="App GalleryIndex">
        <h1>Gallery</h1>
        <ul className="gallery">
          { this.renderImageGallery() }
        </ul>
      </div>  
    );
  }
};
export default Gallery;