import Card from "../shared/Card"
//to link diffrent pages together we use the (LINK element)becuse the {href key tag maight not work everytime}(LINK) and to use the link tag we have to import the pakage first
import { Link } from "react-router-dom"
function AboutPage() {
  return (
   <Card>
    <div className="about">
        <h1>ABOUT THIS PROJECT</h1>
        <p>This is a react app to leave a feedback a feedback about our product or service</p>
        <p>version 1.0.0</p>
        <p>
            <Link to="/">back to home</Link>
        </p>
    </div>
   </Card>
  )
}

export default AboutPage