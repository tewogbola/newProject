// import { useState } from 'react';
import Card from './shared/Card'
import { BsXSquare,BsPencilSquare } from "react-icons/bs";
import { useContext } from 'react';
import FeedbackContext from '../CONTEXT/FeedBackContext';
//npm install(i) react-icon.....to inport react icons into our code




 function FeedbackItem({feedback}) {
// //   the usestate method......we give it two parameters which is to hold the current value and the changed value.

// // INCREASE BUTTON FOR RATINGS........
//   const submitHandler =( ) =>{
//     setRating((prev) =>{
//       return prev + 1
//     })
//   }
  
  
  


//   const [rating, setRating] = useState(8)
//   const [text, setText] = useState("text comimg from state hook")
//   return (
//     <div className='card'>
//       <div className='num-Display'>{rating}</div>
//       <div className='text-Display'>{text}</div>
//       <button onClick={submitHandler}>submit</button>
      
//     </div>
//   )


   // a better way of wrintinh codes
  const {deleteHandler,feedbackEdit} =useContext(FeedbackContext)


     
   return(
    
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <div className='text-display'>{feedback.text}</div>
      <button className='close' onClick={() => deleteHandler (feedback.id)} ><BsXSquare/></button>
      <button className='edit' onClick={()=>feedbackEdit(feedback)} ><BsPencilSquare/></button>

    </Card>
  )
}

export default FeedbackItem
  