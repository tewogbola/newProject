import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useContext,useEffect } from "react"
import FeedbackContext from "../CONTEXT/FeedBackContext"

function FeedbackForm() {
    const {postHandler,editFeedback,updateFeedback}=useContext(FeedbackContext)
    const[text,setText]= useState("")
    const [rating,setRating] = useState(10)
    const[btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage]= useState("")

    useEffect(()=>{
      if(editFeedback.edit === true){
        setBtnDisabled(false)
        setText(editFeedback.item.text)
        setRating(editFeedback.item.rating)
      }
    },[editFeedback])



    const handleTextChange = (e)=>{
        // we use the key word (e or event) to track what we have typed in our input
      if (text ==""){
        setBtnDisabled(true)
        setMessage(null)
      }else if(text !=="" & text.trim().length  < 10){
        setBtnDisabled(true)
        setMessage("text must be up to 10 characters long")
      }else{
        setBtnDisabled(false)
        setMessage(null)
      }
      setText(e.target.value)
    }
  const handleSubmit = (e)=>{
    e.preventDefault() //this method is used to prevent the defuklt thing that is suppose to happen which is in this case,,,its going to refresh 
    if (text.trim().length > 10) {
      const newFeedBack = {
        text: text,
        rating: rating
      }

      if (editFeedback.edit ===true) {
        updateFeedback(editFeedback.item.id, newFeedBack)
      }else{

        postHandler(newFeedBack)
      }

      setText("")
    }
  }
  
  return (
    <Card>
        <form onSubmit={handleSubmit} >
            <h3>How would you like to rate our service</h3>
            <h3>TO-DO LIST</h3>

            <RatingSelect  select = {(rating) => setRating(rating)} />
            <div className="input-group">
                <input type="text"
                 placeholder="write a review"
                 value={text}
                   /*  THE ON (onChange) BUTTON IS USED TO GET WHAT IS BEING TYPED INTO OUR INPUT BOX*/ onChange={handleTextChange} />
                <Button type="submit" isDisabled={btnDisabled}  version={"secondary"}>submit</Button>
                {message && <div>{message}</div>}
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm