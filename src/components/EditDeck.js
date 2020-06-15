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
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { orange, grey } from '@material-ui/core/colors';
import { EditCurrentDeck } from '../deck/deckActions'
import EditIcon from '@material-ui/icons/Edit';


export default function EditDeck(props) {
    const user_id = useSelector(state => state.User.id)
    const deck = useSelector(state => state.Deck)
    const [title, setTitle] = useState(deck[props.props].title)
    const [description, setDescription] = useState(deck[props.props].description)
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    // console.log("EditDeck Props", props.props)

    const handleClickOpen = () => {
        setOpen(true);
        setTitle(deck[props.props].title)
        setDescription(deck[props.props].description)
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
        dispatch(EditCurrentDeck(user_id, deck[props.props].id, title, description));

    }

    let iconStyles = {
        fontSize: '28px',
        color: grey[50]
    };

    if (user_id !== deck[props.props].user_id) {
        return null;
    }

    else {

        return (
            <>
                <Button variant="" color="primary" onClick={handleClickOpen}>
                    <EditIcon style={iconStyles} />
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit Deck</DialogTitle>
                    <DialogContent>
                        <DialogContentText>

                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title"
                            type="string"
                            fullWidth
                            onChange={updateTitle}
                            defaultValue={deck[props.props].title}
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            label="Description"
                            type="string"
                            fullWidth
                            onChange={updateDescription}
                            defaultValue={deck[props.props].description}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
              </Button>
                        <Button onClick={handleSubmit} color="primary">
                            Update
              </Button>
                    </DialogActions>
                </Dialog>
            </>
        );

    }

}
