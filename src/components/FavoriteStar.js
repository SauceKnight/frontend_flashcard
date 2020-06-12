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
import { createNewCards } from '../reducers/cardManagement'
import { addFavorite, deleteFavorite } from '../deck/deckActions'
import StarIcon from '@material-ui/icons/Star';

export default function FavoriteStar(props) {
    console.log("Props: ", props)
    const deck_id = props.props
    const dispatch = useDispatch()
    const user_id = useSelector((state) => state.User.id);
    const favorites = useSelector((state) => state.User.favoritedecks);

    const handleFavorite = async (e) => {
        e.preventDefault();
        if (favorites.includes(parseInt(deck_id))) {
            dispatch(deleteFavorite(user_id, deck_id));
        }
        else {
            dispatch(addFavorite(user_id, deck_id));
        }

    }

    let iconStyles
    if (favorites.includes(parseInt(deck_id))) {
        iconStyles = {
            fontSize: '28px',
            color: orange[300]
        }
    }
    else {
        iconStyles = {
            fontSize: '28px',
            color: grey[300]
        }

    }

    return (
        <>
            <Button variant="" color="primary" onClick={handleFavorite}>
                <StarIcon style={iconStyles} />
            </Button>
        </>
    );
}
