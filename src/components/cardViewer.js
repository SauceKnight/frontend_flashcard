import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../index.css";

// This component is for displaying a single card, and has associated css to
// get the card to flip when you click it. You can use this component to 
// make a wall of cards that each flip, or show flippable cards one-by-one.

const drawerWidth = 240
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // width: `calc(85%)`
    // marginLeft: drawerWidth + 5,
    // marginRight: 10,
    // paddingTop: 500
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function toggler(event) {
  event.currentTarget.classList.toggle("is-flipped");
  console.log(event.currentTarget);
}

function mark_as_complete(event) {
  // mark card as complete in db
}

function back(event) {
  // back to previous card
  // if statement logic here for not going back if you are on the first card
}

function next(event) {
  // go to next card
  // if statement logic here for not going forward if you are on the last card
}

export default function CardViewer(props) {
  const classes = useStyles();

  // const userid = useSelector(state => state.User.id)
  // const username = useSelector(state => state.User.username)
  // const favoriteDecks = useSelector(state => state.User.favoritedecks)
  // const decks = useSelector(state => state.Deck)
  //const cards = useSelector(state => state.Cards)
  //console.log(cards);
  const {id} = props.match.params;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllCards(id));
  // }, [id]);
  // let cardTerm = "";
  
  console.log("id is: " + String(id));
  console.log(props.match.params);

  return (
    <div className="button-card-button"> {/* container for back button, card, next button */}
      <Button variant="contained" className="back_button_cv" onClick={event => back(event)}>Back</Button>
      <div className="scene scene--card">
        <div className="card" onClick={event => toggler(event)}>
          <div className="card__face card__face--front">
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {/* OPTIONAL: display deck when viewing cards from different decks */}
                  {/* Deck: Object-Oriented Programming */}
                </Typography>
                <Typography variant="h5" component="h2">
                  Object
              </Typography>
                <Typography className={classes.pos} color="textSecondary" />
                <Typography variant="body2" component="p">
                  {/* OPTIONAL: hint message below, might not be needed */}
                (click card show answer)
                <br />
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Edit Card</Button>
              </CardActions> */}
            </Card>
          </div>
          <div className="card__face card__face--back">
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {/* OPTIONAL: display deck when viewing cards from different decks */}
                  {/* Deck: Object-Oriented Programming */}
                </Typography>
                <Typography variant="h5" component="h2">
                  Object
              </Typography>
                <Typography className={classes.pos} color="textSecondary" />
                <Typography variant="body2" component="p">
                  an entity containing a compilation of states and behaviors. Each
                  is an instance of a class. Store a memory location, which refers
                  to the location of the actual entity.
                <br />
                </Typography>
              </CardContent>
              <div className="cardViewer_buttons">
                {/* <CardActions>
                  <Button size="small">Edit Card</Button>
                </CardActions> */}
                <CardActions>
                  <Button size="small" onClick={event => mark_as_complete(event)}>Mark as Complete</Button>
                </CardActions>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Button variant="contained" className="next_button_cv" onClick={event => next(event)}>Next</Button>
    </div>
    )
};