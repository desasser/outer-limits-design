import styles from './singlePost.module.css';
import Image from 'next/image';

const SinglePost = ({ post }) => {
  const { featuredImage, postTitle, author, postContent } = post;

  return (
    <section className={styles['post']}>
      <div className={styles['post-wrapper']}>
        <div className={styles['post-image-wrapper']}>
          <Image
            className={styles['post-image']}
            src={featuredImage}
            alt={`Featured image for ${postTitle}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={styles['post-data']}>
          <h2 className={styles['post-title']}>{postTitle}</h2>
          <h3 className={styles['post-author']}>By: {author}</h3>
        </div>
        <div
          className={styles['post-content']}
          dangerouslySetInnerHTML={{ __html: postContent }}
        />
      </div>
    </section>
  );
};

export default SinglePost;