import getPost from "@/lib/getPost";
import React from "react";

const page = async ({ params }) => {
	const { slug } = params;
	const post = await getPost(slug);
	console.log(post);
	return (
		<div>
			<h1>Title: {post.title}</h1>
			<p>Body: {post.body}</p>
		</div>
	);
};

export default page;
