import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

//fetch data with an api
/* 
const getData = async () => {
  //revalidate will refresh page in the given time
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    console.log('something went wrong while fetching data');
  }
  return res.json();
};
 */
const BlogPage = async () => {
  //Fetching data with an api
  // const posts = await getData();

  //Fetching posts without an api
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
