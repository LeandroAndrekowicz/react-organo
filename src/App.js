import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario';
import Porta from './componentes/Portas';
import Rodape from './componentes/Rodape';


function App() {

  const tipoPorta = [
    {
      nome: 'Porta Lisa',
      corPrimaria: '#65c368',
      corSecundaria: '#000000'
    },
    {
      nome: 'Porta Frizatta',
      corPrimaria: '#74d175',
      corSecundaria: '#000000'
    },
    {
      nome: 'Porta Dupla',
      corPrimaria: '#82df83',
      corSecundaria: '#000000'
    },
    {
      nome: 'Porta com Visor',
      corPrimaria: '#90ee90',
      corSecundaria: '#000000'
    },
    {
      nome: 'Porta Com Veneziana',
      corPrimaria: '#9efd9e',
      corSecundaria: '#000000'
    }
  ]

  const [portas, setPortas] = useState([])

  const aNovaPortaAdicionada = (porta) =>{
    setPortas([...portas, porta])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario portas={tipoPorta.map(porta => porta.nome)} aPortaCadastrada = {porta => aNovaPortaAdicionada(porta)}/>
      
      {tipoPorta.map(porta => 
      <Porta key={porta.nome} 
      nome={porta.nome} 
      corPrimaria={porta.corPrimaria} 
      corSecundaria={porta.corSecundaria}
      portas={portas.filter(portas => portas.porta === porta.nome )}/>)} 
      <Rodape/>
    </div>
  );
}

export default App;
