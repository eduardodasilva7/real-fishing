import './NavBar.css';
import menuburger from '../../assets/img/menu.png';
import logo from '../../assets/img/logo_realfishing.png';
import search from '../../assets/search.svg'
import user from '../../assets/img/user.png'


function NavBar() {
  return(
    <nav className='navBar'>
      <img src={logo} alt="" className='logoImg' />
      <a href="" className='btnBurguer'><img src={menuburger} alt="" /></a>
      <ul className="nav-links">
        <li className='nav-link'><a href="">Marcas</a></li>
        <li className='nav-link'><a href="">Categoria</a></li>
        <li className='nav-link'><a href="">Categoria</a></li>
        <li className='nav-link'><a href="">Contato</a></li>
      </ul>


      <div className='busca'>
        <img src={search} alt="" />
        <input type="text" id='textBusca' placeholder='Pesquisar...' />
      </div>

      <div className='user-area'>
        <a href="" className='userImg'><img src={user} alt="" /></a>
        <a href="" className='userText'>Entrar</a>
      </div>
    </nav>
  )}

export default NavBar;