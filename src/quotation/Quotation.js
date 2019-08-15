import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import QuoteContext from './QuoteContext'

function Quotation() {
    const quoteObj = useContext(QuoteContext);
    const themeObj = useContext(ThemeContext);

    return (
                <blockquote style={themeObj.theme.quotation}>
                    <p className="quotation">{quoteObj.quote.text}</p>
                    <footer>— {quoteObj.quote.author}, {quoteObj.quote.source}</footer>
                </blockquote>
    )
}

export default Quotation
