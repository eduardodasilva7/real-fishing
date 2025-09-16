import '../mostruario/Mostruario.css';
import tenis from '../../assets/img/tenis.png'
import estrelas from '../../assets/img/estrela.png'

function Cards() {

  const scrollCards = (direction) => {
    const container = document.getElementById('cardsContainer');
    if(container){
      const cardWidth = container.firstChild?.offsetWidth || 200;
      container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="carrosel carrossel-novidades">
      <button className="btnArrow left" onClick={() => scrollCards(-1)}>&#60;</button>
      <button className="btnArrow right" onClick={() => scrollCards(1)}>&#62;</button> 
      <div className="cards-itens" id="cardsContainer">
        <img src={tenis} alt="" className='card-intensImg' />
        <h3 className='cards-intensText'>Nike Air Max Fire Masculino - Branco</h3>
        <div className="intensAvaliacao">
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
        </div>
        <p className='intensPreco'>R$ 599,99 no Pix</p>
        <a href="" className='btnComprarItens'>Comprar</a>
      </div>
      <div className="cards-itens" id="cardsContainer" >
        <img src={tenis} alt="" className='card-intensImg' />
        <h3 className='cards-intensText'>Nike Air Max Fire Masculino - Branco</h3>
        <div className="intensAvaliacao">
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
        </div>
        <p className='intensPreco'>R$ 599,99 no Pix</p>
        <a href="" className='btnComprarItens'>Comprar</a>
      </div>
      <div className="cards-itens"  id="cardsContainer">
        <img src={tenis} alt="" className='card-intensImg' />
        <h3 className='cards-intensText'>Nike Air Max Fire Masculino - Branco</h3>
        <div className="intensAvaliacao">
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
        </div>
        <p className='intensPreco'>R$ 599,99 no Pix</p>
        <a href="" className='btnComprarItens'>Comprar</a>
      </div>
      <div className="cards-itens"  id="cardsContainer">
        <img src={tenis} alt="" className='card-intensImg' />
        <h3 className='cards-intensText'>Nike Air Max Fire Masculino - Branco</h3>
        <div className="intensAvaliacao">
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
        </div>
        <p className='intensPreco'>R$ 599,99 no Pix</p>
        <a href="" className='btnComprarItens'>Comprar</a>
      </div>
      <div className="cards-itens"  id="cardsContainer">
        <img src={tenis} alt="" className='card-intensImg' />
        <h3 className='cards-intensText'>Nike Air Max Fire Masculino - Branco</h3>
        <div className="intensAvaliacao">
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
        </div>
        <p className='intensPreco'>R$ 599,99 no Pix</p>
        <a href="" className='btnComprarItens'>Comprar</a>
      </div>
      <div className="cards-itens" id="cardsContainer" >
        <img src={tenis} alt="" className='card-intensImg' />
        <h3 className='cards-intensText'>Nike Air Max Fire Masculino - Branco</h3>
        <div className="intensAvaliacao">
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
          <img src={estrelas} alt="" />
        </div>
        <p className='intensPreco'>R$ 599,99 no Pix</p>
        <a href="" className='btnComprarItens'>Comprar</a>
      </div>
      
    </div>
  )
};

export default Cards;