import './Portas.css';
import CardPorta from '../CardPorta';

const Porta = (props) =>{

    const css = { backgroundColor: props.corPrimaria }

    return(
        props.portas.length > 0  && <section className='porta' style={css}>
            <h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>
            <div className='cardPorta'>
                {props.portas.map(porta => 
                <CardPorta corDeFundo={props.corPrimaria} key={porta.nome} nome={porta.nome} cor={porta.cor} 
                imagem={porta.imagem} />)} 
            </div>
        </section>
    )
}

export default Porta;