import React from 'react';
import '../App.css';
import IconButton from '@mui/material/IconButton';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const Note =(props)=>{
    const deleteNote =()=>{
        //to know which note is to be deleted
        props.deleteItem(props.id);
    }
    return(
        <>
        <div className="note">

        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <br />
        <IconButton className='btn' onClick={deleteNote}><DeleteRoundedIcon className='deleteIcon'/></IconButton>
        </div>
        </>
    )
}
export default Note;