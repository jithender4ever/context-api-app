import React from 'react'
import './quotation.css'
import Nav from './Nav'
import Quotation from './Quotation'
import { themes } from './ThemeService'
import QuoteService from './QuoteService'

import ThemeContext from './ThemeContext';

class QuotationApp extends React.Component {
    state = {
        themeObj: {
            theme: themes[0],
            setTheme: this.setTheme.bind(this)
        },
        quote: QuoteService.getRandomQuote()
    };

    nextQuote = () => {
        this.setState({
            quote: QuoteService.getRandomQuote()
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
                    <Nav nextQuote={this.nextQuote} setTheme={this.state.themeObj.setTheme} />
                    <Quotation theme={this.state.themeObj} quote={this.state.quote} />
                </ThemeContext.Provider>
            </main>
        )
    }
}

export default QuotationApp
