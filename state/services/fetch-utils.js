export async function getAllPosts() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/posts`);
  return res.json();
}

export async function insertImage(image_url) {
  // const newSubmission = {
  //   image_url: image_url,
  // };
  const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/image-upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(image_url),
  });
  const data = await rawResponse.json();
  console.log(data, 'data');

  return data;
}
