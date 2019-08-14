import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

import ThemeContext from './ThemeContext';
import QuoteContext from './QuoteContext';

function NextQuoteButton() {
    return (
        <ThemeContext.Consumer>
            {
                themeObj => (
                    <span>
                        <QuoteContext.Consumer>
                            { quoteObj => (
                            <button className="refresh" style={themeObj.theme.refresh} onClick={quoteObj.nextQuote}><FontAwesomeIcon icon={faRedo} /></button>
                            ) }
                        </QuoteContext.Consumer>
                    </span>
                )
            }
        </ThemeContext.Consumer>
    )
}

export default NextQuoteButton
