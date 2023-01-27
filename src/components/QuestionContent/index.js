import styles from "./questionContent.module.css";

const QuestionContent = ({questions}) => {
  return (
    <div className={styles['faq-wrapper']}>
      {questions.length ? 
      (questions.map(({ question, answer }) => (
        <div className={styles['faq-content-wrapper']}>
          <h3 className={styles['faq-header']}>{question} </h3>
          <p className={styles['faq-text']}>{answer}</p>
        </div>
      ))
      ) : (
        <p>No questions!</p>
      )}
    </div>
  );
};

export default QuestionContent;