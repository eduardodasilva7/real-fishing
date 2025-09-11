import "../Input/input.css"
const Input = ({name_input, icon, className}) => {
    return(
        <div>
            <div className="input-body">
                <label htmlFor={name_input}></label>
                <div className="input_icon">
                    <i class={icon}></i>
                    <input type="text" placeholder={name_input} name={name_input} className="input"/>
                </div>
            </div>  
        </div>
    )
}

export default Input;