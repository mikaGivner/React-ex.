import QuizTitle from "./QuizTitle";
import Q1 from "./Q1";
import Q2 from "./Q2";
import "./quiz.css";

export default function TheQuiz() {
  return (
    <div className="theQuiz">
      <QuizTitle></QuizTitle>
      <Q1></Q1>
      <Q2></Q2>
    </div>
  );
}
