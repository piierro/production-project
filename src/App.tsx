import React, { Suspense, useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/UseTheme'
import { classNames } from './helpers/classNames/className'

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
       <Link to="/">Главная</Link>
       <Link to="/main">О сайте</Link>
       <Suspense fallback={<div>Loading...</div>}>
         <Routes>
             <Route path='/' element={<AboutPageAsync />} />
             <Route path='/main' element={<MainPageAsync />} />
         </Routes>
        </Suspense>
    </div>
    )
}