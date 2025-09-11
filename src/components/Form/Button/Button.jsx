import "../Button/Button.css"
const Button = ({name_button, className}) =>{
    return(
        <div>
              <button className={`btn ${className}`}>{name_button}</button>
        </div>
    )
}

export default Button;