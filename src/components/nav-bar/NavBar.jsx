import './NavBar.css';
// import menuburger from '../../assets/img/menu.png';
// import logo from '../../assets/img/logo_realfishing.png';
// import search from '../../assets/search.svg'
// import user from '../../assets/img/user.png'


function NavBar() {
  return(
    <div className="img_fundo">
      <nav className='navBar'>
        {/* <div className="links">
          <a href="" className='btnBurguer'><img src={menuburger} alt="" /></a>
          <img src={logo} alt="" className='logoImg' />
          <ul className="nav-links">
            <li className='nav-link'><a href="">Marcas</a></li>
            <li className='nav-link'><a href="">Categoria</a></li>
            <li className='nav-link'><a href="">Categoria</a></li>
            <li className='nav-link'><a href="">Contato</a></li>
          </ul>
        </div>
        <div className='busca'>
          <img src={search} alt="" className='imgBusca'/>
          <input type="text" id='textBusca' className='textBusca' placeholder='Pesquisar...' />
        </div>
        <div className='user-area'>
          <a href="" className='userImg'><img src={user} alt="" /></a>
          <a href="" className='userText'>Entrar</a>
        </div> */}
      </nav>
    </div>
  )}

export default NavBar;