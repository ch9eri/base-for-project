// installation
// npm install react-datepicker

// 언어 한글 설정
// npm install @types/react-datepicker --save-dev

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const Date = () => {
  const today = new window.Date();
  const [startDate, setStartDate] = useState<Date>(today);
  return (
    <DatePicker
      locale={ko} //한글
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      closeOnScroll={true}    // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
      onChange={(date: Date) => setStartDate(date)}
    />
  );
};

export default Date;
