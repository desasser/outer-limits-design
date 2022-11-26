import styles from "./questionContent.module.css";


const QuestionContent = ({questions}) => {
console.log(questions, 'hi');

  return (
    <div className="faq-question">
      {questions.length ? 
      (questions.map(({ question, answer }) => (
        <div class="question-wrapper">
          <h4>{question} </h4>
          <p>{answer}</p>
        </div>
      ))
      ) : (
        <p>No questions!</p>
      )}
    </div>
  );
};

export default QuestionContent;