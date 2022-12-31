// 복사 라이브러리
// react - copy - to - clipboard

// toast 알림창 라이브러리
// https://fkhadra.github.io/react-toastify/introduction

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Invite = () => {
  const [ip] = useState('www.naver.com');
  const notify = () =>
    toast.success(`초대 링크 복사 성공! ${ip}`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });

  return (
    <div>
      <CopyToClipboard text={ip} onCopy={() => console.log(ip)}>
        <div>
          <button onClick={notify}>링크 복사</button>
          <ToastContainer />
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default Invite;
