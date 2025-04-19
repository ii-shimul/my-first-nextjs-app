import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

const page = async () => {
	const posts = await getAllPosts();
  console.log(posts);
	return (
		<div>
			<h1>Posts</h1>
      <ul>
        {posts.map(post=><li key={post.id}>{post.id}. {post.title} <Link href={`/posts/${post.id}`}>Show More</Link> </li>)}
      </ul>
		</div>
	);
};

export default page;
