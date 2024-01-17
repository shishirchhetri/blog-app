import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
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
        <h1 className={styles.title}>Post Title</h1>
        <div className={styles.detail}>
          <Image
            src='https://images.pexels.com/photos/17401506/pexels-photo-17401506/free-photo-of-sunlit-cobblestone-street-near-building-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            width='50'
            height='50'
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Legend</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.23.2023</span>
          </div>
        </div>
        <div className={styles.content}>
          Wikipedia is a free online encyclopedia, created and edited by
          volunteers around the world and hosted by the Wikimedia Foundation.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
