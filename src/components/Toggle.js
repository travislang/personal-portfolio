import React from 'react'
import * as style from './toggle.module.scss'

import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'

const Toggle = () => (
    <div className={style.container}>
        <FiMoon className={style.icon} />
        <div className={style.switchContainer}>
            <div className={style.innerSwitch} />
        </div>
        <FiSun className={`${style.icon} ${style.yellow}`} />
    </div>
)

export default Toggle
