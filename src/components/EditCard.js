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
import { EditCurrentCard } from '../reducers/cardManagement'
import EditIcon from '@material-ui/icons/Edit';


export default function EditCard(props) {
    const user_id = useSelector(state => state.User.id)
    const deck = useSelector(state => state.Deck)
    const [answer, setAnswer] = useState(props.props.answer)
    const [question, setQuestion] = useState(props.props.question)
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
        dispatch(EditCurrentCard(props.props.id, question, answer));

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
                    <EditIcon style={iconStyles} />
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit Card</DialogTitle>
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
                            defaultValue={props.props.question}
                        />
                        <TextField
                            margin="dense"
                            id="answer"
                            label="Answer"
                            type="string"
                            fullWidth
                            onChange={updateAnswer}
                            defaultValue={props.props.answer}
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
