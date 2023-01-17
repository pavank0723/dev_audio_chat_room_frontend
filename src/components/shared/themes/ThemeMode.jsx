import React, { useState, useEffect } from 'react'
import  "./ThemeMode.module.css"
const ThemeMode = () => {
    const [theme, setTheme] = useState('dark-theme')

    const toggleTheme = () => {
        theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme')
        localStorage.setItem('theme',theme)
    }
    useEffect(() => {
        let currentTheme = localStorage.getItem('theme')
        document.body.className = currentTheme
    }, [theme])
    return (
        <>
            <div className='theme'>
                <i className={`uil ${theme === 'dark-theme' ? 'uil-brightness' : 'uil-moon'} theme-icon `} onClick={() => toggleTheme()}></i>
            </div>

        </>
    )
}

export default ThemeMode