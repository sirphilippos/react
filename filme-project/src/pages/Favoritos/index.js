import { Link } from 'react-router-dom';
import './favoritos.css'
import {useEffect, useState} from 'react'

function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
    const minhaLista = localStorage.getItem("@filmes");
    setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(id){
        let filtrofilmes = filmes.filter((item) => {
            return (item.id !== id) 
        })
        setFilmes(filtrofilmes);
        localStorage.setItem('@primefilmes', JSON.stringify(filtrofilmes))
    }

    return(
        <div className='meus-filmes'>
            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                            <button class="meu-botao"><a href={`https://www.youtube.com/results?search_query=${item.title}+trailer`}>Ver trailer</a></button>
                            <Link class="meu-botao" to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                        </li>
                        
                    )
                })}
            </ul>
        </div>
    );
}

export default Favoritos;