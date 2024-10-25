import React, { useState } from 'react'
import grammartests from '../assets/data/grammarTests'
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {

    const navigate = useNavigate();
    const [choseCate, setChoseCate] = useState();

    const handleTab = (choseCategory) => {
        setChoseCate(choseCategory);
    }

    const handleTestChose = (categoryName, testName) => {
        navigate(`/test/${categoryName}/${testName}`);    
    }

    return (
        <>
            {choseCate ?
                <div className="testPage-tab">
                    <div className='tab-background' />
                    <div className='tab-container'>
                        <List
                            sx={{
                                width: '100%',
                                height: "100%",
                                padding: "10px",
                                bgcolor: 'background.paper',
                                position: 'relative',
                                overflow: 'auto',
                                '& ul': { padding: 0 },
                            }}
                            subheader={<li />}
                        >
                            <li>
                                <ul>
                                    <ListSubheader id="tab-subHeader">
                                        {choseCate.categoryName}
                                        <CloseIcon onClick={() => handleTab("")} id="tab-closeIcon" />
                                    </ListSubheader>
                                    {choseCate.tests.map((item) => (
                                        <ListItem key={item.testName} id='tab-listItem' onClick={() => handleTestChose(choseCate.categoryName, item.testId)}>
                                            <ListItemText primary={item.testName} />
                                        </ListItem>

                                    ))}
                                </ul>
                            </li>
                        </List>
                    </div>
                </div>
                : <></>}
            <div className='page page-test'>
                <div className='test_section test_section-left'>
                    {grammartests.map((category) => (
                        <div className='test_section_left-card' onClick={() => handleTab(category)}>
                            <img src={category.img} alt='' />
                            <div className='test_section_left_card-footer'>
                                <h5>{category.categoryName}</h5>
                                <h5>{category.testCount} 个</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='test_section test_section-right'>
                    <img src={require("../assets/background/backgroundTipsLevel.jpeg")} alt='' />
                    <p>这是阿拉伯语测试合集，您可以根据自己想要的级别选择尝试。参加考试后，您可以了解自己处于什么水平，从而可以提高您的阿拉伯语水平。</p>
                </div>
            </div>
        </>
    )
}

export default TestPage