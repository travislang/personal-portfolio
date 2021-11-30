import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import * as style from './toggle.module.scss'

import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'

const Toggle = () => {
    const { colorMode, setColorMode } = useContext(ThemeContext)
    const [ switchClasses, setSwitchClasses ] = useState([style.innerSwitch])
    const [ firstMount, setFirstMount ] = useState(false)

    useEffect(() => {
        if(colorMode && !firstMount) {
            if(colorMode === 'light') {
                setSwitchClasses(arr => [...arr, style.innerRight])
            }
            setFirstMount(true)
        }
    }, [colorMode, firstMount])

    if (!colorMode) return null

    console.log('switchClasses', switchClasses)

    const handleClick = () => {
        setSwitchClasses(arr => {
            let newArr = arr.filter(className => {
                if(colorMode === 'light') {
                    return className !== style.animateRight
                }
                return className !== style.animateLeft
                
            })
            
            return [ ...newArr, colorMode === 'light' ? style.animateLeft : style.animateRight ]
        })

        setColorMode(colorMode === 'light' ? 'dark' : 'light')
    } 

    return (
        <div className={style.container}>
            <div className={style.switchContainer}>
                <FiSun className={`${style.icon} ${style.yellow}`} />
                <div onClick={handleClick} className={switchClasses.join(' ')} />
                <FiMoon className={`${style.icon} ${style.moonWhite}`} />
            </div>
        </div>
    )
}

export default Toggle
