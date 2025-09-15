import "../Login/Login.css";
import logo from "../../assets/logo.png"
import Button from "../../components/Form/Button/Button.jsx"
import Input from "../../components/Form/Input/Input.jsx";

const Card = () => {
  return (
    <main className="main">
      <section className="section_main">
        <section className="section_principal">
          <section className="section_segundaria">
            <div className="div_logo">
              <img src={logo} alt="logo real-fishing" />
            </div>
            <h2>NÃO TEM LOGIN?</h2>
            <span>Registre-se e fique por dentro de tudo</span>
            <Button children="Criar conta" className="card-button" />
          </section>
        </section>

        <section className="section_form">
          <h2>BEM VINDO AO REAL FISHING</h2>
          <span>Procure os melhores descontos das melhores marcas</span>
          <div className="div_form_campos">
            <Input name_input="Email" icon="fa-regular fa-envelope" />
            <Input name_input="Senha" icon="fa-solid fa-lock" />
            <span className="forget-password">Esqueceu sua senha?</span>
            <Button children="Entrar" className="card-button_form" />

            <div className="section_logins">
              <hr />
              <span>Ou entre com</span>
              <hr />
            </div>

            <Button children="Google" className="button_google"/>

            <span className="span-copywrite">@Real Fishihg - 2025</span>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Card;
