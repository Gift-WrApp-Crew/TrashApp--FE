export async function getAllPosts() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/posts`);
  return res.json();
}

export async function createPost(post) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  console.log(data, 'DATA');
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
