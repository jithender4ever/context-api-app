import React from 'react';
import ThemeSwitcher from './ThemeSwitcher'
import NextQuoteButton from './NextQuoteButton'

function Nav({ nextQuote }) {
    return (
        <nav>
            <ThemeSwitcher />
            <NextQuoteButton nextQuote={nextQuote} />
        </nav>
    )
}

export default Nav
