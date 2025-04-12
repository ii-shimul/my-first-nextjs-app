const page = ({ params }) => {
  const { slug } = params;
  return <div>blog id {slug}</div>;
};

export default page;
