import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { orange, grey } from '@material-ui/core/colors';
import { DeleteCurrentCard } from '../reducers/cardManagement'
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteSpecificDeck } from "../deck/deckActions";
import { Card } from "@material-ui/core";

export default function DeleteCard(props) {
    console.log("Props: ", props)
    // const deck_id = props.props
    const user_id = useSelector((state) => state.User.id);
    const deck = useSelector((state) => state.Deck);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const handleSubmit = async (e) => {
        setOpen(false);
        e.preventDefault();
        dispatch(DeleteCurrentCard(props.props.id));


    }

    let iconStyles = {
        fontSize: '28px',
    };
    if (user_id !== deck[props.props.deck_id].user_id) {
        return null;
    }

    else {

        return (
            <>
                <Button variant="" color="primary" onClick={handleClickOpen}>
                    <DeleteIcon style={iconStyles} />
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Are you sure you want to delete this card?</DialogTitle>
                    <DialogContent>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                        <Button onClick={handleSubmit} color="primary">
                            Delete
          </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}
