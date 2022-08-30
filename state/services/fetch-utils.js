/* eslint-disable max-len */
export async function getAllPosts() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/posts`);
  return res.json();
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

export async function createComment(comment) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(comment),
  });
  const data = await response.json();
  return data;
}

export async function getCommentsByPostId(post_id) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/comments/:id`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
  const data = await response.json(post_id);
  return data;
}
