import styles from "./faqContent.module.css";
import QuestionContent from "../QuestionContent";


const questions = [
  {
    question : "What kind of printer and resin do you use?",
    answer : "Answer 1"
  },
  {
    question : "Do your masters have any issue with cure inhibition?",
    answer : "Answer 2"
  },
  {
    question : "How long does it take to produce a set of masters? What is the process?",
    answer : "Answer 3"
  },
  {
    question : "What is recommended process for polishing? What tools are needed?",
    answer : "Answer 3"
  },
  {
    question : "What kind of files should be sent for fonts or logos?",
    answer : "Answer 3"
  },
  {
    question : "How small/large dice can be printed?",
    answer : "Answer 3"
  },
];

const FAQ = () => {
  return (
    <section className="faq-section">
      <QuestionContent questions={questions}/>
    </section>
  );
};

export default FAQ;