import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import { newDeck } from '../deck/deckActions'

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('')
    const user_id = useSelector(state => state.User.id)
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateTitle = (e) => {
        setTitle(e.target.value);

    }
    const updateDescription = (e) => {
        setDescription(e.target.value);

    }

    const handleSubmit = async (e) => {
        setOpen(false);
        e.preventDefault();
        dispatch(newDeck(user_id, title, description));
        debugger
    }

    return (
        <div>
            <Button variant="" color="primary" onClick={handleClickOpen}>
                <AddIcon />
        Create New Deck
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Create New Deck</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        A deck is a set of flashcards that can be used to study a certain
                        topic.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Deck Title"
                        type="string"
                        fullWidth
                        onChange={updateTitle}
                    />
                    <TextField
                        margin="dense"
                        id="title"
                        label="Description"
                        type="string"
                        fullWidth
                        onChange={updateDescription}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Create
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
