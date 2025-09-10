import "../Input/input.css"
const Input = () => {
    return(
        <div>
            <div className="input-body">
                <i class="fa-regular fa-envelope" className="icon"></i>
                <input type="text" placeholder="Email:" name="email" id="email" className="input"/>
            </div>  
        </div>
    )
}

export default Input;