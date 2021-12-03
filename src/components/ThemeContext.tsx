import React, { useState, useEffect, createContext, FC } from 'react'

import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from './constants'

type ColorMode = 'light' | 'dark'

interface ContextValues {
    colorMode?: ColorMode
    setColorMode?: (colorMode: ColorMode) => void
}

export const ThemeContext = createContext<ContextValues>({})

export const ThemeProvider: FC = ({ children }) => {
    const [colorMode, rawSetColorMode] = useState<ColorMode | undefined>(undefined)

    useEffect(() => {
        const root = window.document.documentElement

        const initialColorValue = root.style.getPropertyValue(INITIAL_COLOR_MODE_CSS_PROP)

        rawSetColorMode(initialColorValue as ColorMode)
    }, [])

    const contextValue = React.useMemo(() => {
        function setColorMode(newValue: ColorMode) {
            const root = window.document.documentElement

            localStorage.setItem(COLOR_MODE_KEY, newValue)

            Object.entries(COLORS).forEach(([name, colorByTheme]) => {
                const cssVarName = `--color-${name}`

                root.style.setProperty(cssVarName, colorByTheme[newValue])
            })

            rawSetColorMode(newValue)
        }

        return {
            colorMode,
            setColorMode,
        }
    }, [colorMode, rawSetColorMode])

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
