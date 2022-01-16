import styles from './singlePost.module.css';

const SinglePost = ({ post }) => {
  const { featuredImage, postTitle, author, postContent } = post;

  return (
    <section className={styles['post']}>
      <div className={styles['post-wrapper']}>
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