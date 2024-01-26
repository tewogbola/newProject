
import propTypes from "prop-types"
function Header({text,bgColor,textColor}){

    const headerStyles= {
        backgroundColor:bgColor,color:textColor,
        textAlign:"center"
    }
    return(
        <div style= {headerStyles}>
            <h2>{text}</h2>
        </div>

    )
}

Header.defaultProps = {
    text : "my Feedback header",
    bgColor:"purple",
    textColor:"yellow"
}
Header.propTypes ={
    text: propTypes.string
}

export default Header