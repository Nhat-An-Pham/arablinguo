import React from 'react'
import { useState } from 'react';
import forum from "../../assets/data/forum"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';

const LoadThreads = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    // Tính tổng số trang
    const totalPages = Math.ceil(forum.length / itemsPerPage);

    // Tạo mảng data cho trang hiện tại
    const currentItems = forum.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Hàm chuyển sang trang tiếp theo
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Hàm chuyển về trang trước đó
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='threads-container'>
            {currentItems.map((thread) => (
                <>
                    <div className='thread-card'>
                        <div className='thread_card_section thread_card_section-head'>
                            <img src={require("../../assets/background/Sample_User_Icon.png")} alt='' />
                            <h3>{thread.writer}: </h3>
                            <h5>{thread.title}</h5>
                        </div>
                        <div className='thread_card_section thread_card_section-body'>
                            <p>{thread.description}</p>
                            <img src={thread.img} alt=''></img>
                        </div>
                        <div className='thread_card_section thread_card_section-footer'>
                            <div id='icon-container'>
                                <ThumbUpIcon id="icon" />
                                <p>{thread.likes}</p>
                            </div>
                            <div id='icon-container'>
                                <ThumbDownIcon id="icon" />
                                <p>{thread.dislike}</p>
                            </div>
                            <div id='icon-container'>
                                <CommentIcon id="icon" />
                                <p>{thread.comment}</p>
                            </div>
                        </div>
                    </div>
                </>
            ))}
            <div className='threads-change'>
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                    上一步
                </button>
                <p>{currentPage}/{totalPages}</p>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    下一步
                </button>
            </div>
        </div>
    )
}

export default LoadThreads