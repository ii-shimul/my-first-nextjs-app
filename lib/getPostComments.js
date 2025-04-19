export default async function getPostComments(slug) {
	const comments = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${slug}/comments`
	);
	return comments.json();
}
