export default async function getPost(slug) {
	const post = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${slug}`
	);
	return post.json();
}
