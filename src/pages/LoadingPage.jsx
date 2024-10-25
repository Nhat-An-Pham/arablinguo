import React from 'react'


const LoadingPage = () => {

  return (
    <div className='page page-loading'>
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>加载中...</p>
      </div>
    </div>
  );
}

export default LoadingPage