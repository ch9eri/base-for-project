// 라이브러리: react-copy-to-clipboard

import React,{useState} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Invite = () => {
    const [ip,] = useState('안녕');

    return (
        <div>
            <CopyToClipboard text={ip} onCopy={ () => console.log(ip) }>
                <button>링크 복사</button>
            </CopyToClipboard>
        </div>
    );
};

export default Invite;