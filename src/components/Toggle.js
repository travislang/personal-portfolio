import React from 'react'
import * as style from './toggle.module.css'

import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'

const Toggle = () => (
    <div className={style.container}>
        <FiMoon className={style.icon} />
        <div className={style.switchContainer}>
            <div className={style.innerSwitch} />
        </div>
        <FiSun className={style.icon} />
    </div>
)

export default Toggle
