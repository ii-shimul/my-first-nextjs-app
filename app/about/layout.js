export const metadata = {
	title: "About",
	description: "This is a about page",
};

const layout = ({children}) => {

  return (
    <div>
      <nav>About Nav</nav>
      {children}
    </div>
  );
};

export default layout;