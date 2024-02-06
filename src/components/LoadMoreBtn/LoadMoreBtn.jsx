import { IoReloadSharp } from 'react-icons/io5';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.div}>
      <button className={css.loadMoreBtn} onClick={onClick}>
        <IoReloadSharp className={css.icon} />
      </button>
    </div>
  );
};

export default LoadMoreBtn;
