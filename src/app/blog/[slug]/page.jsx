import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postuser/PostUsers';
import { Suspense } from 'react';

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    console.log('something went wrong while fetching data');
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/17401506/pexels-photo-17401506/free-photo-of-sunlit-cobblestone-street-near-building-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src='https://images.pexels.com/photos/17401506/pexels-photo-17401506/free-photo-of-sunlit-cobblestone-street-near-building-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            width='50'
            height='50'
            className={styles.avatar}
          />
          {/* we can create a skeleton for the loading effect and put here instead of div */}
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.23.2023</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
