import Link from 'next/link';
import styles from './postList.module.css';

const PostList = ({ posts = [] }) => {
  return (
    <section className={styles['post-list']}>
      <h2 className={styles['post-list-title']}>some interesting things</h2>
      <div className={styles['post-list-grid']}>
        {posts.length ? (
          posts.map(({ postTitle, author, featuredImage, slug }) => (
            <div key={slug} className={styles['post-item']}>
              <div className={styles['post-data']}>
                <h3 className={styles['post-title']}>{postTitle}</h3>
                <h4 className={styles['post-author']}>By {author}</h4>
                <Link href={`/blog/${slug}`}>
                  <a className={styles['post-link']}>See Post</a>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h3>No posts to display!</h3>
        )}
      </div>
    </section>
  );
};

export default PostList;