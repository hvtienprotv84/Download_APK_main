import React from 'react';
import { Text } from '../Text';
import '../../src/component/Explore.css';
import { Link } from 'react-router-dom';

export default function Explore() {
  
    return (
      <div>
      <div className="container_title">
        <div className="container_img_title_android">
          <img className="img_android" src="android.png" alt='' />&nbsp;
          <h1 className="title"> <Text tid="exploreHeader" /></h1> &nbsp;&nbsp;
        </div>
        <div className="container_img_title_reactnative">
        <img className="img_reactnative" src="reactnative.png" alt='' />&nbsp;
        <h1 className="title"> <Text tid="reactnative" /></h1>
        </div>
      </div>
        <div>
          <img className="img_cv" src="anhapp1.jpg" alt="Ảnh CV"/>
          <img className="img_cv" src="anhapp2.jpg" alt="Ảnh CV"/>
          <img className="img_cv" src="anhapp3.jpg" alt="Ảnh CV"/>
          <img className="img_cv" src="anhapp4.jpg" alt="Ảnh CV"/>
          <img className="img_cv" src="anhapp5.jpg" alt="Ảnh CV"/>
        </div>

      <div className="link_history_apk">
        <img className="link_history_apk_img" src="history_apk.png" alt='' />
        <Link className="link_history_apk_text" to="/HistoryAPK"><Text tid="history_apk" /></Link>
      </div>


        {/* <h2 className="download"><b><Text tid="welcomeDescription" /></b></h2> */}
        {/* <a className="download" href="path-to-your-file.pdf" download="filename.pdf">
          <h2><Text tid="welcomeDescription" /></h2>
        </a> */}


<div className="download">
        <a href="f497.apk" download className="authorized-reseller-api-btn">
  <svg
    height="42"
    width="40"
    viewBox="0 0 24 24"
    className="document-download_svg__h-6 document-download_svg__w-6"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeWidth="2px"
      fill="none"
      stroke="#FFFFFF"
      d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>

  <span className="texts">
    <span className="text-2">220325.apk</span>
    <span className="text-1"><Text tid="download_version" /></span>
  </span>
</a>
</div>


      </div>
    );
  }