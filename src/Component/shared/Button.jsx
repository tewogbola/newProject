import propTypes from "prop-types"
import { version } from "react"

function Button({children,version,isDisabled}) {
  return (
    <button disabled={isDisabled} className={`btn btn-${version}`}> 
        {children}
    </button>
  )
}


Button.defultProps={
    version: "primary",
    isDisabled: false
}

Button.prototype-={
    children: propTypes.node.isRequired,
    version: propTypes.string, 
    isDisabled: propTypes.bool
}
export default Button