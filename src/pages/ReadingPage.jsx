import React, { useState } from 'react'
import readings from '../assets/data/reading'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AudioPlayer from '../component/audioplayer/AudioPlayer';

const ReadingPage = () => {

    const [showDes, setShowDes] = useState("")
    const itemsPerPage = 4;

    const chooseReading = (value) => {
        const reading = readings.find(reading => reading.readingId === value)
        setShowDes(reading);
    }

    const [currentPage, setCurrentPage] = useState(1);

    // Tính tổng số trang
    const totalPages = Math.ceil(readings.length / itemsPerPage);

    // Tạo mảng data cho trang hiện tại
    const currentItems = readings.slice(
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
        <div className='page page-reading'>
            <div className='reading_section reading_section-cards'>
                <input id="outlined-search" placeholder='抬头...' type="search" style={{ backgroundColor: "white", border: "none" }} />
                <div className='reading_card-cards'>
                    {currentItems.map((reading, index) => (
                        <div className='reading_card-container' key={index}>
                            <div className="reading_card-left" onClick={() => chooseReading(reading.readingId)}>
                                <h2>{reading.readingTitle}</h2>
                                <p>{reading.readingDes}</p>
                            </div>
                            <div className="reading_card-right">
                                <ReportProblemIcon className="reading_card-report" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='reading_card-buttons'>
                    <button onClick={handlePrevious} disabled={currentPage === 1}>
                        上一步
                    </button>
                    <p>{currentPage}/{totalPages}</p>
                    <button onClick={handleNext} disabled={currentPage === totalPages}>
                        下一步
                    </button>
                </div>
            </div>
            <div className='reading_section reading_section-text'>
                <div className='reading_text-header'>
                    <h3>{showDes.readingTitle}</h3>
                </div>
                <div className="reading_text-text">
                    <p>{showDes.readingDes}</p>
                    <AudioPlayer audioSrc="" />
                </div>
            </div>
        </div>
    )
}

export default ReadingPage