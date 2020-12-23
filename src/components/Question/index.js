import './styles.css';

export default function Question({question}) {
    let operationString = question.operation;
    
    if(question.operation === 'x'){
        operationString = '×';
    } else if(question.operation === '/'){
        operationString = '÷';
    }
    
    return (
        <div className="question">{question.first} {operationString} {question.second}</div>
    );
}