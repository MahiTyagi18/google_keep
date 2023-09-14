import React, { useState } from 'react';
import '../App.css';
import IconButton from '@mui/material/IconButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { ChromePicker } from 'react-color';

const CreateNote =(props)=>{
    const [expand,setExpand] =useState(false);
    const expandIt =()=>{
        setExpand(true);
    }
    const narrowIt =()=>{
        setExpand(false);
    }
    const [note,addNote]= useState({
        title: '',
        content: '',
    });
    const handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        addNote((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            }
        })
    }
    const handleClick =()=>{
        props.passNote(note);
        addNote({
            title: '',
            content: '',
        })
    }
    
    
              
    return(
        <>
        <div className='main_note'>
            <form className='form'>
                {expand ? <input type="text" placeholder='Title' autoComplete='off' name='title' onChange={handleChange} value={note.title}/>: null}
                <textarea name="content" id="content" cols="30" rows="4" placeholder='Enter your text here..'  onChange={handleChange} onDoubleClick={narrowIt} onClick={expandIt} value={note.content}/>
                {expand?<IconButton className='btn-2' ><ColorLensRoundedIcon className='add-color'/></IconButton> :null}
                {expand?<IconButton className='btn-1' onClick={handleClick}><AddRoundedIcon className='plus-sign'/> </IconButton>:null}
                
            </form>
        </div>
        </>
    )
}
export default CreateNote;