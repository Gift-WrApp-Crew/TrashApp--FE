export async function getAllPosts() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/posts`);
  return res.json();
}
