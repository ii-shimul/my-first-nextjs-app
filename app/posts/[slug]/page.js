import Comments from "@/app/components/Comments";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const post = await getPost(slug);
	return {
		title: post.title,
		description: post.body,
	};
}

const page = async ({ params }) => {
	const { slug } = await params;
	const postPromise = getPost(slug);
	const commentsPromise = getPostComments(slug);
	const post = await postPromise
	return (
		<div>
			<h1>Title: {post.title}</h1>
			<p>Body: {post.body}</p>
			<hr />
			<h1 className="mt-5 text-3xl">Comments</h1>
			<Suspense fallback="<h1>Loading comments...</h1>">
				<Comments promise={commentsPromise}></Comments>
			</Suspense>
		</div>
	);
};

export default page;
