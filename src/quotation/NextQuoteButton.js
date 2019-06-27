import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

function NextQuoteButton({ next, theme }) {
    return (
        <span>
            <button className="refresh" style={theme.refresh} onClick={next}><FontAwesomeIcon icon={faRedo} /></button>
        </span>
    )
}

export default NextQuoteButton
