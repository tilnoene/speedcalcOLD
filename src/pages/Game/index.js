import Question from '../../components/Question';
import Input from '../../components/Input';
import Keyboard from '../../components/Keyboard';

import "./styles.css";

export default function Game({question}) {
    return (
        <div className="game">
            <Question question={question} />
            <Input />
            <Keyboard />
        </div>
    );
}