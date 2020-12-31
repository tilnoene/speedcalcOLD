import { useState, Component } from 'react';
import MainMenu from './pages/MainMenu';
import Game from './pages/Game';
import { generateQuestions, checkAnswer } from './functions';

let questions = generateQuestions(2);
let index = 0;

class App extends Component {
  state = {
    value: ""
  };
  onChangeValueHandler = val => {
    this.setState({ value: val.target.value });
  };

  render() {
    //const [index, setIndex] = useState(0);
    //const [errors, setErrors] = useState(0);
    //const [time, setTime] = useState(parseInt(new Date().getTime()));

    let question = questions[index];

    //console.log(userAnswer);
    
    console.log(this);
    
    return (
      <Game />
    );
  }
}

export default App;