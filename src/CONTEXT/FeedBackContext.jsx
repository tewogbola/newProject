//CONTETEXT API....it make our relationship across the app easire

//A PROVIDER....it takes in a function 

//.provide is used as a convention meaning....when we use a context tag we had .provider to it
//then in our app.jsx we wrap our code in our context provider

import { createContext,useState, useEffect } from "react";
import feedbackData from "../Component/FeedbackData";
import{v4 as uuid4} from "uuid"


const FeedbackContext = createContext(null)

export const FeedbackProvider  = ({children}) =>{
    const [feedBack,setfeedback] = useState([])

    useEffect(()=>{
      getFeedback()
    },[])

const getFeedback = async() =>{
  const response = await fetch("http://localhost:3000/feedback")
  const data = await response.json()
  setfeedback(data)
}

    const deleteHandler = async (id)=>{
    setfeedback(feedBack.filter((item)=> item.id !== id))
  if (window.confirm(`are you sure you want to delete this item`)) {
    await fetch(`http://localhost:3000/feedback/${id}`, {method: "DELETE" })
    setfeedback(feedBack.filter((item)=> item.id !== id))
  }
}
const postHandler =async(newFeedBack) =>{
 // we use the spread operator(...) to make refrence to the exisiting list of item\
 const response =await fetch(`http://localhost:3000/feedback`,{
  method: "POST",
  headers:{
    "content-type":"application/json"
  },
  body: JSON.stringify(newFeedBack)
 })

 const data = await response.json()
  setfeedback([data,...feedBack])
}
const [editFeedback, setEditFeedback] = useState({
  item:{},
  edit: false
})
const feedbackEdit = (flist) =>{
  setEditFeedback({
    item: flist,
    edit: true
  })
}
const updateFeedback = async(id, upditem)=>{
  const response = await fetch(`http://localhost:3000/feedback/${id}`,{
    method: "PUT",
    headers:{
      "Content-Type":"application/json"
    }, body: JSON.stringify(upditem)
  })

  const data = await response.json()
  setfeedback(
    feedBack.map((item)=>(item.id ===id ? {...item,...data} : item))
  )
}
    return(
        <FeedbackContext.Provider  value={{feedBack,deleteHandler,postHandler,feedbackEdit,editFeedback,updateFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext