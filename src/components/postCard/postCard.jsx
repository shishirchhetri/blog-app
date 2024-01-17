import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/19752120/pexels-photo-19752120/free-photo-of-bronco-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt='post image'
            className={styles.img}
            fill
          />
        </div>
        <span className={styles.date}>01.10.2023</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Blog Title</h1>
        <p className={styles.desc}>Blog Description</p>
        <Link className={styles.link} href='/blog/post '>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
