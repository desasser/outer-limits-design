import Link from 'next/link';
import styles from './postList.module.css';
import Image from 'next/image';

const PostList = ({ posts = [] }) => {
  return (
    <section className={styles['post-list']}>
      <h2 className={styles['post-list-title']}>what's up, blog</h2>
      <div className={styles['post-list-grid']}>
        {posts.length ? (
          posts.map(({ postTitle, author, featuredImage, slug }) => (
            <div key={slug} className={styles['post-item']}>
              <Link href={`/blog/${slug}`}>
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
              </Link>
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