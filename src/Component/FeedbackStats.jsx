import { useContext } from "react"
import FeedbackContext from "../CONTEXT/FeedBackContext"


function FeedbackStats() {
  const {feedBack} = useContext(FeedbackContext)
    //caculating avarge rating

    let average = feedBack.reduce((acc,cur)=>{
        return acc + cur.rating
    },0)/(feedBack.length)
    average = average.toFixed(2)

  return (
    <div className='feedstats'>
        <h4>{feedBack.length} Review</h4>
        <h4 className='avg'>Average Rating: {isNaN(average)? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats