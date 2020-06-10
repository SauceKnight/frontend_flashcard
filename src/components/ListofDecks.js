// import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { fetchDecks, fetchFavoriteUserDecks } from '../deck/deckActions'

// function ListofDecks({ deckData, favoritesData, fetchFavoriteUserDecks, fetchDecks }) {
//     useEffect(() => {
//         // fetchDecks(1),
//         fetchFavoriteUserDecks(1)
//     }, [])
//     console.log(favoritesData)
//     return (
//         <div>
//             {/* <h1>Decks</h1>
//             {console.log(deckData)}
//             <div>
//                 {deckData.map(deck => <p>{deck.title}</p>)}
//             </div> */}
//             <h2>Fav Decks</h2>
//             <p>Number of Decks: {favoritesData.length}</p>
//             <div>
//                 {favoritesData.map(deck => <p>{deck.title}</p>)}
//             </div>

//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         deckData: state.Deck.decks,
//         favoritesData: state.Deck.favoritedecks
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchDecks: (userid) => dispatch(fetchDecks(userid)),
//         fetchFavoriteUserDecks: (userid) => dispatch(fetchFavoriteUserDecks(userid))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ListofDecks)
