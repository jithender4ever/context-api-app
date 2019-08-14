import React from 'react'
import ThemeContext from './ThemeContext'
import QuoteContext from './QuoteContext'

function Quotation() {
    return (
        <ThemeContext.Consumer>
            {
                themeObj => (
                    <QuoteContext.Consumer>
                        { quoteObj => (
                                <blockquote style={themeObj.theme.quotation}>
                                    <p className="quotation">{quoteObj.quote.text}</p>
                                    <footer>— {quoteObj.quote.author}, {quoteObj.quote.source}</footer>
                                </blockquote>
                            )
                        }

                    </QuoteContext.Consumer>
                )
            }
        </ThemeContext.Consumer>
    )
}

export default Quotation
