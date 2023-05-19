import './Formulario.css'
import CampoTexto from '../CampoTexto/campoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = (props) =>{

    const [nome, setNome] = useState('');
    const [cor, setCor] = useState('');
    const [imagem, setImagem] = useState('');
    const [porta, setPorta] = useState('');

    const aoSalvar = (evento) =>{
        evento.preventDefault();

        props.aPortaCadastrada({
            nome,
            cor,
            imagem,
            porta
        })
        setNome('');
        setCor('');
        setImagem('');
        setPorta('');
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card das Portas</h2>
                <CampoTexto 
                    obrigatorio ={true} 
                    label="Nome" 
                    placeholder="Digite o Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <CampoTexto 
                    obrigatorio ={true} 
                    label="Cor" 
                    placeholder="Digite a Cor"
                    valor={cor}
                    aoAlterado={valor => setCor(valor)}/>
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor) }/>
                <ListaSuspensa 
                    obrigatorio ={true} 
                    label="Portas" 
                    itens={props.portas}
                    valor={porta}
                    aoAlterado = {valor => setPorta(valor)}
                    >
                </ListaSuspensa>
                <Botao texto="Criar Card" />
            </form>
        </section>
    )
}

export default Formulario;