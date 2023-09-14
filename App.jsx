import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateNote from './components/CreateNote';

const App=()=>{
  const [addItem,setAddItem] = useState([]);
  const addNote =(note)=>{
    setAddItem((preValue)=>{
      return [...preValue,note];
    })
  }
  const onDelete =(id)=>{
      setAddItem((oldData)=>{
        return oldData.filter((currEle,index)=>{
          return index !==id;
        })
      })
  }
  return(
    <>
    <div className="main_div">
      <Header/>
      <CreateNote passNote ={addNote}/>
      {
        addItem.map((val,index)=>{
          return(
            <Note
            key={index}
            id ={index}
            title ={val.title}
            content = {val.content}
            deleteItem = {onDelete}
            />
          )
        })
      }
      <Footer/>
    </div>
    </>
  )
}
export default App;
    