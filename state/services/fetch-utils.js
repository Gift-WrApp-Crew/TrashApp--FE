/* eslint-disable max-len */
export async function getAllPosts() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
  return res.json();
}

export async function addtoFavorites(id) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  const data = await response.json();
  return data;
}

export async function getFavorites() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/favorites`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  return data;
}

// export async function getAllReactions() {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/reactions`);
// }

export async function createPost(post) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
}

export async function updatePost(post) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${post.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  console.log(data, 'A FUNKY STRING OF DATA');
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
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
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
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/sessions`, {
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
  await fetch(`${process.env.REACT_APP_API_URL}/users/sessions`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
}
export async function getUser() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });
  const data = await response.json();
  return data;
}
