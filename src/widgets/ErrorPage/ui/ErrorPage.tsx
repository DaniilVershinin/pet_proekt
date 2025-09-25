import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';


interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {

    const reloadPage = () => {
        location.reload();
    }

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
        <p> "Произошла непридведенная ошибка "</p>
        <button onClick={reloadPage}> Перезагрузить страницу </button>
    </div>
  );
};
