import { getUser } from '@/lib/data';
import styles from './postuser.module.css';

//fetching data with an api
/*  
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
*/

const PostUser = async ({ userId }) => {
  //fetch user with an api
  // const user = await getData(userId);

  //fetch user without an api
  const user = await getUser(userId);
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
