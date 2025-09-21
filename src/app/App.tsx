import React, {Suspense, useContext} from 'react';
import './styles/index.scss';
import {Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {AppRouter} from './providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import {useTranslation} from 'react-i18next';
import {changeLanguage} from "i18next";


export const App: React.FC = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};










