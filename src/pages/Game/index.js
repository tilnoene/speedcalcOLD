import { Component } from 'react';

import Question from '../../components/Question';
import Input from '../../components/Input';
import Keyboard from '../../components/Keyboard';

import "./styles.css";
import { render } from '@testing-library/react';

//<Keyboard />
class Game extends Component {
    render() {
        const { value, onChangeValue } = this.props;
        console.log(this.props);
        return (
            <div className="game">
                <Question question={{first: 2, second: 3, operation: '+'}}/>
                <div className="container-answer"><Input /></div>
            </div>
        );
    }
}

export default Game;