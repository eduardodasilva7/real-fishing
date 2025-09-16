import './Mostruario.css';
import ofertaImg from '../../assets/img/ofertas.png';
import Cards from '../cards/Cards'

function Mostruario() {
  return (
    <div className='mostruario'>
      <h2 className='titleMostruario'>Ofertas da semana</h2>
      <div className="ofertas">
        <img src={ofertaImg} alt="" className='ofertaImg' />
        <Cards />
        
      </div>
    </div>
  )
};

export default Mostruario;