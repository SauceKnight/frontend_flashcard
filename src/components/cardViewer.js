import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

// This component is for displaying a single card, and has associated css to
// get the card to flip when you click it. You can use this component to 
// make a wall of cards that each flip, or show flippable cards one-by-one.

const useStyles = makeStyles({
  root: {
    minWidth: 300
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
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

export default function CardViewer() {
  const classes = useStyles();
  return (
    <div className="cardViewer_scene scene--card">
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
            <CardActions>
              {/* TODO: edit card when button is pressed */}
              <Button size="small">Edit Card</Button>
            </CardActions>
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
              <CardActions>
                {/* TODO: edit card when button is pressed */}
                <Button size="small">Edit Card</Button>
              </CardActions>
              <CardActions>
                <Button size="small">Mark as Complete</Button>
              </CardActions>
            </div>
          </Card>
        </div>
      </div>
    </div>