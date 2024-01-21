import styles from './postuser.module.css';

const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: 'no-store' },
  );
  if (!res.ok) {
    console.log('something went wrong while fetching data');
  }
  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await getData(userId);
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};
export default PostUser;
