type ColorOptions = {
    light: String
    dark: string
}

export interface Colors {
    [key: string]: ColorOptions
}

export const COLORS: Colors = {
    text: {
        light: 'hsl(0deg, 0%, 10%)', // white
        dark: 'hsl(0deg, 0%, 100%)', // black
    },
    cardText: {
        light: '#1b1b1b', //black
        dark: '#f7f7f7', //white
    },
    blueText: {
        light: '#71747d',
        dark: '#8b8f9f',
    },
    background: {
        light: '#fcfcfc',
        dark: '#2e2e2e', //$dark-grey
    },
    cardBackground: {
        light: '#e0e0e0',
        dark: '#4b4b4b',
    },
    switchColor: {
        light: '#c6c5c5', //$switch-color
        dark: '#fcfcfc',
    },
    primary: {
        light: '#254ccb', //$main-blue
        dark: '#254ccb', //$main-blue
    },
    secondary: {
        light: 'rgb(57, 159, 227)', //$light-blue
        dark: 'rgb(57, 159, 227)', //$light-blue
    },
    asideText: {
        light: '#eeeeee',
        dark: '#3f3f3f',
    },
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
