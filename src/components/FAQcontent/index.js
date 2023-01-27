import styles from "./faqContent.module.css";
import QuestionContent from "../QuestionContent";


const questions = [
  {
    question : "What kind of printer and resin do you use?",
    answer : "Outer Limits Designs uses a Formlabs Form 3 printer and the corresponding clear resin. The balance between polishing and accuracy of prints provided by this system is excellent."
  },
  {
    question : "Do your prints have any issue with cure inhibition?",
    answer : "No, this print system does not have any issues with cure inhibition for commonly used platinum-cure silicones such as DragonSkin and SortaClear from Smooth-On and BBDino Silicones."
  },
  {
    question : "How long does it take to produce a set of masters? What is the process?",
    answer : "It takes approximately 3 weeks to process orders right now, if there are a number of other orders, it may take longer. When you place your order or contact us, we will work with you to make sure the details are correct and then send you an invoice via PayPal. Once the invoice is paid, I will begin the process of 3D modeling, test printing anything necessary, printing the final product, checking for quality control, and finally shipping your order out."
  },
  {
    question : "What is your policy for issues or mistakes?",
    answer : "If there are ever any issues with your products, I will work with you and do everything possible to ensure you have a functional product and can continue your dice making journey."
  },
  {
    question : "What is recommended process for polishing? What tools are needed?",
    answer : "I use 400 grit sandpaper to remove the support marks and blemishes and then move to polishing using Zona Papers from 3M that I have cut in quarters to extend their life. I use a pottery wheel and hold each face of the die on each paper for 5 seconds, checking between papers to ensure that all marks from the previous paper have been removed. If polishing by hand, I do approximately 50 circles on each paper and check for marks before moving to the next paper."
  },
  {
    question : "What kind of files should be sent for fonts or logos? Where can I find fonts?",
    answer : "When choosing a font, I recommend Google Fonts or 1001freefonts.com. I can work with almost any font and I can download it myself if you provide the link, use a ttf or otf file, or use a vector file (such as SVG, AI, or similar) if you have created the font yourself. Logos can be sent to me as a pdf, svg, ai, or similar vector file. I can work from a jpg file as well, but some detail will be lost."
  },
  {
    question : "How small/large dice can be printed?",
    answer : "The largest size I have printed is approximately 75mm and the smallest set I have successfully printed is about 8mm. Anything in between 8 and 75mm is doable, though price scales based on size."
  },
];

const FAQ = () => {
  return (
    <section className={styles['faq-section']}>
      <QuestionContent questions={questions}/>
    </section>
  );
};

export default FAQ;