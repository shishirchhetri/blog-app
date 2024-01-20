const { default: Link } = require('next/link');

const NavigationTestPage = () => {
  return (
    <div>
      <Link href='/' prefetch={false}>
        Click here
      </Link>
    </div>
  );
};
export default NavigationTestPage;
