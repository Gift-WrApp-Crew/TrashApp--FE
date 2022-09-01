/* eslint-disable max-len */
export async function getAllPosts() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
  return res.json();
}

export async function createPost(post) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  const data = await res.json();
  return data;
}

export async function updatePost(post) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/posts/${post.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  const data = await res.json();
  return data;
}

export async function deletePost(post) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/posts/${post.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  const data = await res.json();
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
  const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data;
}
export async function signInUserFunction(user) {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/users/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data;
}
export async function logoutUser() {
  await fetch(`${process.env.REACT_APP_API_URL}/users/sessions`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
}
export async function getUser() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
  const data = await res.json();
  return data;
}
