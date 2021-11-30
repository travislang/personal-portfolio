import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import * as style from './toggle.module.scss'

import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'

const Toggle = () => {
    const { colorMode, setColorMode } = useContext(ThemeContext)

    useEffect(() => {
        console.log('dark mode changed', colorMode)
    }, [colorMode])

    if (!colorMode) return null

    const switchStyle = colorMode === 'dark' ? style.switchLeft : style.switchRight

    const handleClick = () => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light')
    }

    return (
        <div className={style.container}>
            <FiMoon className={style.icon} />
            <div className={style.switchContainer}>
                <div onClick={handleClick} className={`${style.innerSwitch} ${switchStyle}`} />
            </div>
            <FiSun className={`${style.icon} ${style.yellow}`} />
        </div>
    )
}

export default Toggle
