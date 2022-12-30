// sol1. 아이콘 안 넣으면 이거 사용 (간단)
// @ts-ignore
// import { Progress } from 'react-sweet-progress';
// import 'react-sweet-progress/lib/style.css';

//sol2. 직접 만들기
import '../style.css';

const ProgressBar = () => {
  return (
    <div className="playground">
      <div className="bar-container">
        <ul>
          <li>
            <span className="css-progressbar bar" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressBar;
