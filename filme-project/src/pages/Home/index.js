import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import api from '../../services/api'

///movie/now_playing?api_key=caefd849fb75d35888b114f2524e7524&language=pt-B


function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "caefd849fb75d35888b114f2524e7524",
                    language: "pt-BR",
                    page: 1
                }
            })
            setFilmes(response.data.results.slice(0,7))
            setLoading(false);
        }
        
        loadFilmes();

        
    }, [])

    if(loading){
        return(
            <div className='loadingfilmes'> Carregando filmes</div>
        );
    };




    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
                            
<Link to={`/filme/${filme.id}`}>Acessar</Link>
                            <p>{filme.overview}</p>
                        </article>
                    )
                })}
            </div>
        </div>
    )
};

export default Home;