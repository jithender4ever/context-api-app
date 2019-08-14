import React from 'react'
import { themes, findThemeByName } from './ThemeService'

import ThemeContext from './ThemeContext';

const themeOptions = themes.map(themeOption =>
    <option key={themeOption.name} value={themeOption.name}>
        {themeOption.name}
    </option>
)

function ThemeSwitcher( ) {
    return (
        <ThemeContext.Consumer>
        {
            themeObj => (
                <span>
                    Select theme:
                    <select value={themeObj.theme.name} onChange={e => themeObj.setTheme(findThemeByName(e.target.value))}>
                        {themeOptions}
                    </select>
                </span>
            )
        }
        </ThemeContext.Consumer>
    )
}

export default ThemeSwitcher
