import "../auth-card/Card.css";
import logo from "../../../assets/logo.png";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

const Card = () => {
  return (
    <main className="main">
      <section className="section_principal">
        <section className="section_segundaria">
          <div className="div_logo">
            <img src={logo} alt="logo real-fishing" />
          </div>
          <h2>NÃO TEM LOGIN?</h2>
          <span>Registre-se e fique por dentro de tudo</span>
          <Button name_button="Criar conta" className="card-button" />
        </section>
      </section>

      <section className="section_form">
        <h2>BEM VINDO AO REAL FISHING</h2>
        <span>Procure os melhores descontos das melhores marcas</span>
        <div className="div_form_campos">
            <Input name_input="Email" icon="fa-regular fa-envelope"/>
            <Input name_input="Senha" icon="fa-solid fa-lock"/>
            <Button name_button="Entrar" className="card-button_form"/>
        </div>
      </section>
    </main>
  );
};

export default Card;
