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
            <h2>JÁ TEM LOGIN?</h2>
            <span>Entre no botão abaixo!</span>
            <Button children="Fazer Login" className="card-button" />
          </section>
        </section>

        <section className="section_form">
          <h2>CRIAR CONTA</h2>
          <span>Procure os melhores descontos das melhores marcas</span>
          <div className="div_form_campos">
            <Input name_input="Nome completo" icon="fa-regular fa-envelope" />
            <Input name_input="seuemail@example.com" icon="fa-regular fa-envelope" />
            <Input name_input="Digite sua senha"   icons={["fa fa-user", "fa fa-check eye-password"]} />
            <Input name_input="Confirme sua senha" icons={["fa fa-user", "fa fa-check eye-password"]} />
            <Button children="Criar conta" className="card-button_form" />

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
