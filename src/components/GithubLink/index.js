import styles from './githubLink.module.css';

const GithubLink = ({ link }) => {
  return (
    <a target="_blank" href={link}><img src="/logos/github.svg"></img></a>
  );
};

export default GithubLink;