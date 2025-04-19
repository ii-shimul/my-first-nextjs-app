import React from 'react';

const Comments = async ({promise}) => {
  const comments = await promise;
  return (
		<ul>
			{comments.map((comment) => (
				<li className="mt-3 border p-2 w-fit" key={comment.id}>
					Name: {comment.name} <br /> Email: {comment.email} <br />
					{comment.body}
				</li>
			))}
		</ul>
	);
};

export default Comments;