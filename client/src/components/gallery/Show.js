import React from 'react';
import { fetchGalleryImages } from '../../utilities/api-helpers';

class Show extends React.Component {
  state = {
    id: '',
    title: '',
    images: []
  }

  // TODO fetch gallery when component mounts
  componentDidMount(){
    const id = this.props.match.params.id;
    if(id) {
      fetchGalleryImages(id)
        .then(res => console.log('RESPONSE', res))
        .catch(err => console.log(err));
    }
  }

  render(){
    return(
      <div className="App">
        <h1>Gallery Title</h1>
      </div> 
    );
  };
}
export default Show;