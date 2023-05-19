import './CardPorta.css';

const CardPorta = (props) =>{
    return(
        <div className='portas'>
            <div className='cabecalho' style= {{backgroundColor: props.corPrimaria}}> 
                <img src={props.imagem} alt={props.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cor}</h5>
            </div>
        </div>
    )
}

export default CardPorta;