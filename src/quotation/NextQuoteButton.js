import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

import ThemeContext from './ThemeContext';

function NextQuoteButton({ nextQuote }) {
    return (
        <ThemeContext.Consumer>
            {
                themeObj => (
                    <span>
                        <button className="refresh" style={themeObj.theme.refresh} onClick={nextQuote}><FontAwesomeIcon icon={faRedo} /></button>
                    </span>
                )
            }
        </ThemeContext.Consumer>
    )
}

export default NextQuoteButton
