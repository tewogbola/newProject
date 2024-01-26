 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes,Route,NavLink } from 'react-router-dom'
import Header from './Component/Header'
import FeedbackList from './Component/FeedbackList'

import FeedbackStats from './Component/FeedbackStats'
import FeedbackForm from './Component/FeedbackForm'
import AboutPage from './Component/Pages/AboutPage'
import Card from './Component/shared/Card'
import { FeedbackProvider } from './CONTEXT/FeedBackContext'
function App() {
  //mot the right way of writimg react codes
  // const title = "HELLO FROM THE APP COMPONENT"
  // const body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi officia sunt ex sapiente dignissimos reprehenderit, libero labore non praesentium!"
  // const comments = [
  //   {id:1, tittle: "comment1"},
  //   {id:2, tittle: "comment2"},
  //   {id:3, tittle: "comment3"}
  // ]

  // const loading = false
  

  // const showComments= true
  // const showBlock =  (<div>
  //   <h3 > ALL COMMENT ({comments.length})</h3>
  //   <ul>
  //     {comments.map((comment) =>(
  //       <li key={comment.id}>{comment.tittle}</li>
  //     ))}
  //   </ul>
  // </div>)

  // if(loading) return <h1>loading...</h1>
  // return (
  //   <div className='container'>
  //     <h1>{title}</h1>
  //     <p>{body}</p>


  //    {showComments && showBlock }
//when we want to create a global componet we begine with a capital letter


//how to properly write codde in react
//we create the code in another folder then link it to the APP.JSX folder


//property....it is used to qualify a component
//there are two method of using PROPs
//first method usesu the key word PROPS.
//second method uses the name of the attribut
//state property....it means the current position of a particular element......
//howw towork with state
//the use state hook..t is used to chsnge the state








// const deleteHandler = (id)=>{
  
//     setfeedback(feedBack.filter((item)=> item.id !== id))
  
  // if (window.confirm(`are you sure yoi want to delete this item`)) {
  //   setfeedback(feedBack.filter((item)=> item.id !== id))
  // }
//}
// const postHandler =(newFeedBack) =>{
  // we use the spread operator(...) to make refrence to the exisiting list of item\
//   newFeedBack.id = uuid4()
//   setfeedback([newFeedBack,...feedBack])
// }
  return(
    
   <FeedbackProvider>
    <Router>
      <Header/>
      <div className='container'>
       <Routes>
        <Route path='/' element={
          <>
          <FeedbackForm/>
          
      < FeedbackStats />
       <FeedbackList/>
          </>
        }
        />
         <Route path='/about' element={<AboutPage/>}/>
       </Routes>
        <Card>
          <NavLink to="/" activeclassmame="active">     
            HOME  
          </NavLink>
          <NavLink to="/about" activeclassname="active"> 
            ABOUT
          </NavLink>
        </Card>
      </div>  
      </Router>
   </FeedbackProvider>
  )

}


export default App
