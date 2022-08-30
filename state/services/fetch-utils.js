/* eslint-disable max-len */
export async function getAllPosts() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/posts`);
  console.log('res.json', res.json);
  return res.json();
}

export async function createPost(post) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  // console.log(data, 'DATA');
  return data;
}

export async function insertImage(image_url) {
  const newSubmission = {
    image: image_url,
  };
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/image-upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(newSubmission),
  });
  const data = await rawResponse.json();

  return data;
}

export async function signUpUserFunction(user) {
  console.log('USERR', user);
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
}
export async function signInUserFunction(user) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
}
export async function logoutUser() {
  await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/sessions`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
}
export async function getUser() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/me`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
  const data = await response.json();
  return data;
}
