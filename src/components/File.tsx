// reference
// https://velog.io/@yeogenius/React-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%95%98%EA%B8%B0

import { useRef, useCallback,useState } from 'react';

const File = () => {
  const [filename, setFilename] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      setFilename(e.target.files[0].name);
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      // api 연결

      // axios({
      //   baseURL: API_HOST,
      //   url: '/files/:username/thumbnail',
      //   method: 'POST',
      //   data: formData,
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // })
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    },
    []
  );

  const onUploadButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <div>
      {/* 안 보이게 display none style 주기 */}
      <input type={'file'} ref={inputRef} onChange={onUpload} style={{display:'none'}}/>
      <button onClick={onUploadButtonClick}>파일 업로드</button>
      <div>{filename}</div>
    </div>
  );
};

export default File;
