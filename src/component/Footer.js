import React from 'react'
import { Text } from '../Text';
import '../../src/App.css'; 

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
  return (
    <div className='container_copyright'>

    <div className='copyright_myname'>
        <span>{currentYear} &copy; <Text tid="copyright" /></span>
    </div>
    
    <div className='copyright_version'>
        <span><Text tid="version" /></span>
    </div>
    
    </div>
  )
}
