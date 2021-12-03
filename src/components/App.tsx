import React, { FC } from 'react'

import { ThemeProvider } from './ThemeContext'

const App: FC = ({ children }): JSX.Element => {
    return <ThemeProvider>{children}</ThemeProvider>
}

export default App
