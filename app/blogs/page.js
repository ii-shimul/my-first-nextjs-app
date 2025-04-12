import Link from "next/link";

const blogs = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];
const page = () => {
  return (
    <div>
      {blogs.map((blog, index) => (
        <div key={index}>
          <Link href={`/blogs/${blog.id}`}>Blog {blog.id}</Link>
        </div>
      ))}
    </div>
  );
};

export default page;
