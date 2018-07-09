import React from 'react';

import { fetchGalleryImages } from '../../utilities/api-helpers';

class Show extends React.Component {
  state = {
    id: '',
    title: '',
    images: []
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    if(id) {
      this.fetchGallery(id);
    }
  }
  
  fetchGallery = (id) => {
    fetchGalleryImages(id)
      .then(res => {
        if(res.ok && res.status === 200){
          return res.json();
        }
      }) 
      .then(res => {
        this.setState({
          id: res.id,
          title: res.title,
          images: res.image_files,
          redirect: false
        })
      })
      .catch(err => {
        console.log('Error fetching gallery images:', err);
        this.props.history.push('/gallery');
      });
  }

  renderGalleryImages = () => {
    const images = this.state.images;
    if(images.length > 0){
      return images.map(image => {
        return <li className="image" key={ image.id }><img src={ image.url } alt={ image.name } /></li>
      })
    }
  }

  render(){
    return(
      <div className="App container">
        <h1>{ this.state.title }</h1>
        <ul className="gallery">
          { this.renderGalleryImages() }
        </ul>
      </div> 
    );
  };
}
export default Show;