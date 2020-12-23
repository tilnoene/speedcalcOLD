import useState from 'react';
import MainMenu from './pages/MainMenu';
import Game from './pages/Game';
import { generateQuestions, checkAnswer } from './functions';

export default function App() {
  //const [index, setIndex] = useState(0);
  //const [errors, setErrors] = useState(0);
  //const [time, setTime] = useState(parseInt(new Date().getTime()));

  let question = generateQuestions(2)[0];
  
  console.log(question);
  return (
    <Game question={question} />
  );
}