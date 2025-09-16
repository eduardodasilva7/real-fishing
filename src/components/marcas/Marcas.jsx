import './Marcas.css'
import nike from '../../assets/img/nike.png'

function Home() {
  return(
    <div className="home">
      <h1 className='title'>Olá bem vindo a Real Fishing , o que você procura?</h1>
      <div className="btnMarcas">

        <button className="btnMarca"><img src={nike} alt="" /></button>
        <button className="btnMarca"><img src={nike} alt="" /></button>
        <button className="btnMarca"><img src={nike} alt="" /></button>
        <button className="btnMarca"><img src={nike} alt="" /></button>
        <button className="btnMarca"><img src={nike} alt="" /></button>
        <button className="btnMarca"><img src={nike} alt="" /></button>
        <button className="btnMarca"><img src={nike} alt="" /></button>  

      </div>

      <div className='cards'>
        <div className="card">
          <img src={nike} alt="" />
          <h3>Camisa</h3>
        </div>
        <div className="card">
          <img src={nike} alt="" />
          <h3>Calça/Shorts</h3>
        </div>
        <div className="card">
          <img src={nike} alt="" />
          <h3>Sneaker</h3>
        </div>
        <div className="card">
          <img src={nike} alt="" />
          <h3>Acessórios</h3>
        </div>
      </div>
    </div>
  )
}

export default Home;