import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postuser/PostUsers';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';
import { formatDate } from '@/lib/utils';

//fetch data with an api
const getData = async (slug) => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  //fetching with the app-api route
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error('something went wrong while fetching data');
  }
  return res.json();
};

export const generateMetaData = async ({ params }) => {
  const slug = { params };
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  //fetch post with an api
  const post = await getData(slug);

  // fetch post without an api
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && (
          <Image src={post.img} alt='' fill className={styles.img} />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {/* we can create a skeleton for the loading effect and put here instead of div  */}
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {formatDate(post.createdAt.toString())}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
