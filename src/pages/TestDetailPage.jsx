import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GrammarTestComponent from '../component/test/GrammarTestComponent';
import grammartests from '../assets/data/grammarTests';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const TestDetailPage = () => {

    const { categoryName, testId } = useParams();
    const navigate = useNavigate();
    const [testQuestions, setTestQuestions] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem("login-token");
        if (!user) {
            navigate("/login");
        }
        mainFunction();
    }, []);


    const mainFunction = () => {
        const level = grammartests.find((item) => categoryName === item.categoryName);
        const test = level?.tests.find((item) => testId === item.testId);

        if (test) {
            setTestQuestions(test.questions);
        } else {
            console.log("Question is undefined");
        }
    };

    const handleReturn = () => {
        navigate("/test");
    }

    return (
        <div className='page page-testDetailPage'>
            <div className='testDetailPage-link'>
                <div id='return' onClick={() => handleReturn()}> <KeyboardReturnIcon />Return</div>
            </div>
            {testQuestions.length > 0 ? (
                <GrammarTestComponent questions={testQuestions} />
            ) : (
                <>Hi</>
            )}
        </div>
    );
};

export default TestDetailPage;
