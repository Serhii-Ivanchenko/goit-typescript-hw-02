import { FaRegFaceFrown } from 'react-icons/fa6';
import css from './ErrorMessage.module.css'
import React, { FC } from 'react';

const ErrorMessage: FC = () => {
  return (
    <div>
      <p className={css.error}>
        Something went wrong! Please, reload the page!
        <br />
        <FaRegFaceFrown className={css.errorIcon} />
      </p>
    </div>
  );
};

export default ErrorMessage;
