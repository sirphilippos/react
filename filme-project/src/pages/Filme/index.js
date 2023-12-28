import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import api from '../../services/api'

function Filme(){
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true) 

    useEffect(()=> {
        loadFilmes();

        async function loadFilmes(){
           const response = await api.get(`/movie/${id}`, {
                params:{
                    api_key: "caefd849fb75d35888b114f2524e7524",
                    language: "pt-BR",
                    page: 1
                }
            })
            .then((response)=> {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                console.log("filme n encontrado")
            });
        }
    }, [])

    if(loading){
        return(
            <div className='Filme-info'>
                <p>Carregando os dados do Fil e</p>
            </div>
        )
    }
    
    return(
        <div className='Filme-info'>
            <h1>Acessando filme {id}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}/>
        </div>
    );
}

export default Filme;