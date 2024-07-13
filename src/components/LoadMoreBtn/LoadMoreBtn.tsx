import { FC } from 'react';
import { HandleLoadMoreClick } from '../App/App.types';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: HandleLoadMoreClick;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
