**Frontend routes:**

    GET /           returns LoggedIn component that displays information for the logged in user    
    GET /login      returns LoginPanel component that displays forms for the user to log in with    
    GET /signup     returns SignupPanel component that displays forms for the user to sign up with    

**Backend routes:**

*User:*    

    POST /signup              creates a new user and session token based on info from form    
    POST /login               authenticates a user based on info from form, and generates a new session token    
    GET /users/<int:userid>   returns all the info for a user as an object    

*Deck:*

    GET /user/<int:userid>/deck/<int:deckid>    returns a deck as an object
    GET /user/<int:userid>/decks                returns all decks for the currently logged in user
    POST /user/<int:userid>/new_deck            creates a new deck for the currently logged in user
    POST search/decks                           searchbp route, searches all decks based on a search term
    
*Card:*

    GET /cards                             calls Card.query.all(), presumably returns all cards tied to 
                                           the logged in user, this route might be pruned in the future
    GET /cards/<deckid>                    returns an array of cards tied to a deck id
    GET /cards/<int:deckId>/<int:cardId>   returns the info for a single card as an object
    POST /cards/<deckid>                   checks to see if the deck you are writing to exists,
                                           then creates a new card for that deck
                                           
*Completed:*

    GET /<userid>/<deckid>/completed       returns an array of cards from one deck that a user has completed
    POST /<userid>/<cardid>/complete       checks to make sure a card exists, then marks that card as complete

*Favorites:*

    GET /<int:userid>/decks/favorites                  returns an array of favorites tied to a user id
    POST /<int:userid>/<int:deckid>/favorites          pushes a deck into favorites
    DELETE /<int:userid>/<int:deckid>/favoritedelete   deletes a deck out of favorites, returns favorites list

    
    
    
    
