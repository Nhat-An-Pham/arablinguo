import React from 'react'
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import forum from '../assets/data/forum';
import LoadThreads from '../component/threads/LoadThreads';

const ForumPage = () => {

    const [ratingChose, setRatingChose] = useState("每周");
    const ratings = ["每周", "每月", "每年"];

    const categories = [
        { title: "household", logo: require("../assets/icons/home.png") },
        { title: "translator", logo: "" },
        { title: "environment", logo: "" },
        { title: "lifestyle", logo: "" },
        { title: "Medical", logo: "" },
        { title: "Work", logo: "" },
    ]

    const handleChooseRating = (value) => {
        const choseRate = ratings.find((rating) => rating === value);
        setRatingChose(choseRate);
    }

    return (
        <div className='page page-forum'>
            <div className='forum_section forum_section-main'>
                <div className="forum_section_main_panel forum_section_main_panel-left">
                    <input placeholder='search...'></input>
                    <div className='forum_main_left-categories'>
                        <h5>话题</h5>
                        {categories.map((category) => (
                            <div className='main_left_categories-card'>
                                <img alt='' src={category.logo}></img>
                                <p>{category.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='forum_section_main_panel forum_section_main_panel-middle'>
                    <div className='forum_main_middle-search'>
                        <input id="createThread" placeholder='Create New Thread' />
                        <SendIcon id="icon" />
                    </div>
                    <div className="forum_main_middle-threads">
                        <LoadThreads />
                    </div>
                </div>
                <div className='forum_section_main_panel forum_section_main_panel-right'>
                    <div className="forum_main_right-interest">
                        <h5>最感兴趣的问题</h5>
                        <p>读书如交友，应求少而精 :)))</p>
                    </div>
                    <div className="forum_main_right-rating">
                        <h5 id='rating'>等级</h5>
                        <div className='forum_middle_forum-head'>
                            {ratings.map((rating, index) => (
                                <p key={index} onClick={() => handleChooseRating(rating)} id={ratingChose === rating ? "ratingChose" : ""}>{rating}</p>
                            ))}
                        </div>
                        <div className='forum_middle_forum-content'>
                            {forum.slice(0, 8).map((post) => (
                                <div className='forum_middle_forum_content-card'>
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
            </div>
        </div>
    )
}

export default ForumPage