// 복사 라이브러리
// react - copy - to - clipboard

// toast 알림창 라이브러리
// https://fkhadra.github.io/react-toastify/introduction

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Invite = () => {
  const [team] = useState(1);
  const notify = () =>
    toast.success(`초대 링크 복사 성공!`, {
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
    // http://localhost:3000/login/1 <- 복사되는 주소
    <div>
      <CopyToClipboard
        text={'http://localhost:3000/login/' + team}
        onCopy={() => console.log(team)}
      >
        <div>
          <button onClick={notify}>링크 복사</button>
          <ToastContainer />
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default Invite;
