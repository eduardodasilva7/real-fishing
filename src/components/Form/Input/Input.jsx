import "../Input/input.css"
const Input = ({ name_input, icons = [], className }) => {
  return (
    <div className="input-body">
      <label htmlFor={name_input}></label>
      <div className={`input_icon ${className || ""}`}>
        {icons.map((icon, index) => (
          <i key={index} className={icon}></i>
        ))}
        <input type="text" placeholder={name_input} name={name_input} className="input" />
      </div>
    </div>
  );
};


export default Input;