import React from 'react';
import { Text } from '../Text';
import { Link } from 'react-router-dom';
import '../../src/component/Explore.css';

// Dữ liệu JSON về các ứng dụng và tệp APK
export const apkList = [
  {
    name: "225525.apk",
    date: "22.03.2025",
    apkFile: "/history_apk/080325.apk"  // Đảm bảo không dùng "./public/"
  },
  {
    name: "210325.apk",
    date: "21.03.25",
    apkFile: "/history_apk/210325.apk"
  },
  {
    name: "200325.apk",
    date: "20.03.25",
    apkFile: "/history_apk/200325.apk"
  },
  {
    name: "190325.apk",
    date: "19.03.25",
    apkFile: "/history_apk/190325.apk"
  },
  {
    name: "180325.apk",
    date: "18.03.25",
    apkFile: "/history_apk/180325.apk"
  },
  {
    name: "170325.apk",
    date: "17.03.25",
    apkFile: "/history_apk/170325.apk"
  },
  {
    name: "150325.apk",
    date: "15.03.25",
    apkFile: "/history_apk/150325.apk"
  },
  {
    name: "140325.apk",
    date: "14.03.25",
    apkFile: "/history_apk/140325.apk"
  },
  {
    name: "130325.apk",
    date: "13.03.25",
    apkFile: "/history_apk/130325.apk"
  },
  {
    name: "100325.apk",
    date: "10.03.25",
    apkFile: "/history_apk/100325.apk"
  },
  {
    name: "090325.apk",
    date: "09.03.25",
    apkFile: "/history_apk/090325.apk"
  },
  {
    name: "080325.apk",
    date: "08.03.25",
    apkFile: "/history_apk/080325.apk"
  },
  {
    name: "100325.apk",
    date: "10.03.25",
    apkFile: "/history_apk/100325.apk"
  },
  {
    name: "090325.apk",
    date: "09.03.25",
    apkFile: "/history_apk/090325.apk"
  },
  {
    name: "150425.apk",
    date: "15.04.25",
    apkFile: "/history_apk/150425.apk"
  },  
];

const Page1 = () => {
  return (
    <div>
      <h2 className="title_history_apk"><Text tid="history_apk" /></h2>
      <div className="apk-list">
        {/* {apkList.slice(0, 12).map((item, index) => (
          <div key={index} className="apk-item">
            <span>{item.name} - {item.date}</span>
            <a href={item.apkFile} download={item.name}>
              <button>Tải về</button>
            </a>
          </div>
        ))} */}
        {apkList
  .slice() // tạo bản sao để không thay đổi mảng gốc
  .sort((a, b) => {
    const parseDate = (str) => {
      const [day, month, year] = str.split('.').map(Number);
      const fullYear = year < 100 ? 2000 + year : year;
      return new Date(fullYear, month - 1, day);
    };
    return parseDate(b.date) - parseDate(a.date); // sắp xếp giảm dần
  })
  .slice(0, 12)
  .map((item, index) => (
    <div key={index} className="apk-item">
      <span>{item.name} - {item.date}</span>
      <a href={item.apkFile} download={item.name}>
        <button>Tải về</button>
      </a>
    </div>
))}
      </div>
        <div className="backtohome">
          <Link className="backtohome_text" to="/">Trang Chủ</Link>
        </div>
    </div>
  );
};

export default Page1;
