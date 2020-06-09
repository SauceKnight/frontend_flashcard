import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDecks } from '../deck/deckActions'

function ListofDecks({ deckData, fetchDecks }) {
    useEffect(() => {
        fetchDecks(1)
    }, [])
    console.log(deckData)
    return (
        <div>
            <h1>Decks</h1>
            {console.log(deckData)}
            <div>
                {deckData.map(deck => <p>{deck.title}</p>)}
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        deckData: state.Deck.decks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDecks: (userid) => dispatch(fetchDecks(userid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListofDecks)
