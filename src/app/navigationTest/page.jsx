'use client';

import { useRouter } from 'next/navigation';
const { default: Link } = require('next/link');
const NavigationTestPage = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log('CLicked');
    router.push('/');
  };
  return (
    <div>
      <Link href='/' prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  );
};
export default NavigationTestPage;
