import axiosClient from './axiosClient';

export const register = (user) => {
  return fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => res);
};

export const signin = (data) => {
  return fetch('http://localhost:3001/user_token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res);
};

// DOES NOT WORK - problem with formData FIXME
// export const fileUploader = (formData) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json'
//     },
//     body: formData
//   }
//   return fetch('http://localhost:3001/api/v1/galleries', options)
//     .then(res => console.log(res));
// }

export const fileUploader = (formData) => {
  return axiosClient['post']('http://localhost:3001/api/v1/galleries', formData)
  .then(res => res);
}

export const fetchGalleryImages = (id) => {
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/galleries/${id}`, options)
    .then(res => res);
}

export const fetchGalleriesImages = () => {
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/galleries`, options)
    .then(res => res);
}