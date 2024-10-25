import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import Carousel from '../component/Carousel';
import forum from '../assets/data/forum';



const HomePage = () => {
    const [cateChose, setCateChose] = useState("词汇");
    const [ratingChose, setRatingChose] = useState("每周");

    const categories = ["词汇", "汉字", "语法", "照片"];
    const ratings = ["每周", "每月", "每年"];
    const mostFindCharacters = ["我", "牛逼", "通过", "遇到", "你好"];
    const suggestCharacters = ["我", "牛逼", "通过", "遇到", "你好"];

    const handleChooseCate = (value) => {
        const choseCate = categories.find((category) => category === value);
        setCateChose(choseCate);
    }
    const handleChooseRating = (value) => {
        const choseRate = ratings.find((rating) => rating === value);
        setRatingChose(choseRate);
    }
    

    return (
        <div className='page page-home'>
            <div className='home_section home_section-search'>
                <input placeholder='抬头...'></input>
                <SearchIcon />
            </div>
            <div className='home_section home_section-cate'>
                {categories.map((category, index) => (
                    <p key={index} onClick={() => handleChooseCate(category)} id={cateChose === category ? "cateChose" : ""}>{category}</p>
                ))}
            </div>
            <div className='home_section home_section-middle'>
                <div className='home_section_middle home_section_middle-left'>
                    <h5>最多查询的词</h5>
                    <div className='home_section_middle-wordList'>
                        {mostFindCharacters.map((mostFindCharacter) => (
                            <p>{mostFindCharacter}</p>
                        ))}
                    </div>
                    <h5>最多查询的词</h5>
                    <div className='home_section_middle-wordList'>
                        {suggestCharacters.map((suggestCharacter) => (
                            <p>{suggestCharacter}</p>
                        ))}
                    </div>
                </div>
                <div className='home_section_middle home_section_middle-info'>
                    <Carousel />
                    <div className="home_middle_info-description">
                        <h3>查找汉语-阿拉伯语、阿拉伯语-汉语词汇</h3>
                        <p>在查找框中输入中文、拼音或阿拉伯文</p><br />
                        <p>例如：熊猫、xiongmao、xióngmāo、xiong2mao1 或 panda。</p>
                    </div>
                    <div className="home_middle_info-tips">
                        <h3>学习阿拉伯语的技巧</h3>
                        <p>一。记住字母表</p>
                        <p>二。多看电影</p>
                        <p>三。练习说阿拉伯语</p>
                    </div>
                </div>
                <div className='home_section_middle home_section_middle-forum'>
                    <h5 id='rating'>等级</h5>
                    <div className='home_middle_forum-head'>
                        {ratings.map((rating, index) => (
                            <p key={index} onClick={() => handleChooseRating(rating)} id={ratingChose === rating ? "ratingChose" : ""}>{rating}</p>
                        ))}
                    </div>
                    <div className='home_middle_forum-content'>
                        {forum.slice(0,8).map((post) => (
                            <div className='home_middle_forum_content-card'>
                                <p id='writer-title'><span>{post.writer}: </span>{post.title}</p>
                                <div id='icon-wrapper'>
                                    <div id='icon-container'>
                                        <ThumbUpIcon id="icon" />
                                        <p>{post.likes}</p>
                                    </div>
                                    <div id='icon-container'>
                                        <ThumbDownIcon id="icon" />
                                        <p>{post.dislike}</p>
                                    </div>
                                    <div id='icon-container'>
                                        <CommentIcon id="icon" />
                                        <p>{post.comment}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="home_section home_section-review">
                
            </div>
        </div>
    )
}

export default HomePage