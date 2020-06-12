import React, { useState } from "react";
import { useDispatch } from 'react-redux'
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
import { createNewCards } from '../reducers/cardManagement'

export default function NewCard(props) {
    console.log("Props: ", props)
    const deck_id = props.props
    const [answer, setAnswer] = useState("")
    const [question, setQuestion] = useState('')
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    const updateAnswer = (e) => {
        setAnswer(e.target.value);

    }
    const updateQuestion = (e) => {
        setQuestion(e.target.value);

    }

    const handleSubmit = async (e) => {
        setOpen(false);
        e.preventDefault();
        dispatch(createNewCards(deck_id, question, answer));

    }

    let iconStyles = {
        fontSize: '28px',
        color: grey[50]
    };

    return (
        <>
            <Button variant="" color="primary" onClick={handleClickOpen}>
                <AddRoundedIcon style={iconStyles} />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Create New Card</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="question"
                        label="Question"
                        type="string"
                        fullWidth
                        onChange={updateQuestion}
                    />
                    <TextField
                        margin="dense"
                        id="answer"
                        label="Answer"
                        type="string"
                        fullWidth
                        onChange={updateAnswer}
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
        </>
    );
}
