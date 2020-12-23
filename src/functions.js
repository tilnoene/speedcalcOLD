function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAnswer({question}, userAnswer) {
    if(question.operation === '+'){
        if(question.first + question.second === userAnswer){
            return true;
        }
    } else if(question.operation === '-'){
        if(question.first - question.second === userAnswer){
            return true;
        }
    } else if(question.operation === 'x'){
        if(question.first * question.second === userAnswer){
            return true;
        }
    } else if(question.operation === '/'){
        if(question.first / question.second === userAnswer){
            return true;
        }
    }

    return false;
}

function hashQuestion(question){ /* "stringfy" a question object */
    let v1 = question.first.toString() + question.operation + question.second.toString();
    let v2 = question.second.toString() + question.operation + question.first.toString();
    
    return [v1, v2];
}

export function generateQuestions(level) { /* array of 10 not repeated questions */
    /*
    level 1 = + and -
    level 2 = x and /
    level 3 = undefined
    */
    
    let questions = []; /* all questions */

    if(level === 1){
        questions = [...questions, ...(generateFiveQuestions(level, '+'))];
        questions = [...questions, ...(generateFiveQuestions(level, '-'))];
    } else if(level >= 2){
        questions = [...questions, ...(generateFiveQuestions(level, 'x'))];
        questions = [...questions, ...(generateFiveQuestions(level, '/'))];
    }

    shuffle(questions);
    return questions;
}

function generateFiveQuestions(level, operation) { /* array of 5 questions of the same type */
    let questions = []; /* five questions of same type */
    let alreadyExists = {}; /* verify if question already exists */

    for(let i = 0; i < 5; i++){
        let question = generateQuestion(level, operation);
        
        while(alreadyExists[hashQuestion(question)]){
            question = generateQuestion(level, operation);
        }
        alreadyExists[hashQuestion(question)] = true;
        questions.push(question);
    }
    
    return questions;
}

function generateQuestion(level, operation) { /* generate one random question */
    /*
    level 1 = + and -
    level 2 = x and /
    level 3 = undefined
    */
    
    if(level === 1){
        if(operation === '+'){
            return {first: getRandomIntInclusive(2, 9), second: getRandomIntInclusive(2, 9), operation};
        } else{
            let first = getRandomIntInclusive(2, 9);
            let second = getRandomIntInclusive(2, 9);

            if(first < second){
                let temp = first;
                first = second;
                second = temp;
            }

            return {first: first, second: second, operation: operation};
        }
    } else if(level >= 2){
        if(operation === 'x'){
            return {first: getRandomIntInclusive(2, 9), second: getRandomIntInclusive(2, 9), operation};
        } else{ // division
            let first = getRandomIntInclusive(2, 9);
            let second = getRandomIntInclusive(2, 9);
            let prod = first * second;

            return {first: prod, second: second, operation};
        }
    }
}

function shuffle(array) { /* Fisher-Yates Shuffle Algorithm */
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
}