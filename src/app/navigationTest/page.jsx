'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
const { default: Link } = require('next/link');
const NavigationTestPage = () => {
  const router = useRouter();
  //getting thr current path from the query tab
  const pathname = usePathname();
  //to get the query that is searched like price, name etc
  const searchParams = useSearchParams();
  //this q refers the query
  const q = searchParams.get('q');
  console.log(q);

  const handleClick = () => {
    console.log('CLicked');
    //if used replace then the histroy would not be stored it back button on the browser won't work
    //router.replace('/');
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
