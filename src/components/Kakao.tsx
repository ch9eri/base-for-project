import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { REST_API_KEY, REDIRECT_URI } from '../data/LoginData';

const Kakao = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return <div>카카오에서 토큰 받아오기</div>;
};

export default Kakao;
