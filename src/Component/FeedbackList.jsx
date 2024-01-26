import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../CONTEXT/FeedBackContext'


function FeedbackList({handelDelete}) {
    const {feedBack} = useContext(FeedbackContext)

    if(!feedBack || feedBack.Lenght === 0){
        return <p>NO FEEDBACK YET</p>
    }
  return (
    <div>
        {feedBack.map((item)=>(
            <FeedbackItem key={item.id} feedback={item} deleteFeedBack = {handelDelete}/>
        ))}
    </div>
  )
}

export default FeedbackList