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

export const fileUploader = (formData) => {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json, */*'
    },
    body: formData
  }
  // delete options.headers['Content-Type'];
  return fetch('http://localhost:3001/api/v1/galleries', options)
    .then(res => console.log(res));
}