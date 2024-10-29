import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const GrammarTestComponent = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const navigate = useNavigate();

    const handleAnswerClick = (answer) => {
        const currentQuestion = questions[currentQuestionIndex];

        if (answer === currentQuestion.correct) {
            setCorrectAnswers((prev) => [...prev, currentQuestion]);
        } else {
            setIncorrectAnswers((prev) => [...prev, { ...currentQuestion, chosen: answer }]);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleReturn = () => {
        navigate("/test");
    }

    const renderResults = () => {
        return (
            <div className='gTest-wrapper'>
                <div className='gTest-question'>
                    <h2>Quiz Results</h2>
                    <p>Correct answers: {correctAnswers.length}</p>
                    <p>Incorrect answers: {incorrectAnswers.length}</p>
                </div>
                {incorrectAnswers.length > 0 && (
                    <div className='gTest-middle'>
                        <h3>Incorrect Answers:</h3>
                        <ul>
                            {incorrectAnswers.map((item, index) => (
                                <li key={index}  >
                                    <strong id='question'>Question {index + 1}:</strong> {item.question} <br />
                                    <strong>Your answer:</strong> {item.chosen} <br />
                                    <strong>Correct answer:</strong> {item.correct}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className='gTest-button'>
                    <button onClick={() => handleReturn()}>Finish Test</button>
                </div>
            </div>
        );
    };

    const renderQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];

        return (
            <div className='gTest-wrapper'>
                {questions ?
                    <>
                        <div className='gTest-question'>
                            <h2>Question {currentQuestionIndex + 1}</h2>
                            <p>{currentQuestion.question}</p>
                        </div>
                        <div className='gTest-answers'>
                            {currentQuestion.answers.map((answer, index) => (
                                <button key={index} onClick={() => handleAnswerClick(answer)}>
                                    {answer}
                                </button>
                            ))}
                        </div>
                    </>
                    : <></>}
            </div>
        );
    };

    return <div className='gTest-container' >{isQuizFinished ? renderResults() : renderQuestion()}</div>;
};

export default GrammarTestComponent