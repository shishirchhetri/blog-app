const { default: Link } = require('next/link');

const NotFound = () => {
  return (
    <div>
      <h2>The page you were searching is not found.</h2>
      <p>Sorry, page not found,error 404 Not found </p>
      <Link href='/'>Return Home</Link>
    </div>
  );
};
export default NotFound;
