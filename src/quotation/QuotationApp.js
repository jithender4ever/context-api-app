import React from 'react'
import './quotation.css'
import Nav from './Nav'
import Quotation from './Quotation'
import { themes } from './ThemeService'
import QuoteService from './QuoteService'

import ThemeContext from './ThemeContext';
import QuoteContext from './QuoteContext';

class QuotationApp extends React.Component {
    state = {
        themeObj: {
            theme: themes[0],
            setTheme: this.setTheme.bind(this)
        },
        quoteObj: {
            quote: QuoteService.getRandomQuote(),
            nextQuote: this.nextQuote.bind(this)
        }
    };

    nextQuote() {
        this.setState({
            quoteObj: { ...this.state.quoteObj, quote: QuoteService.getRandomQuote() }
        })
    };

    setTheme(theme) {
        this.setState({
            themeObj: {
                ...this.state.themeObj,
                theme
            }
        })
    }

    render() {
        return (
            <main style={this.state.themeObj.theme}>
                <ThemeContext.Provider value={this.state.themeObj}>
                    <QuoteContext.Provider value={this.state.quoteObj}>
                        <Nav />
                        <Quotation />
                    </QuoteContext.Provider>
                </ThemeContext.Provider>
            </main>
        )
    }
}

export default QuotationApp
