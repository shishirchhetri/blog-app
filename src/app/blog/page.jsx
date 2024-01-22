import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';

const BlogPage = async () => {
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

  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};
export default BlogPage;
