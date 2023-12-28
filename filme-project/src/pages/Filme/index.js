import {useEffect, useState} from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import api from '../../services/api'
import './filme-info.css'

function Filme(){
    const {id} = useParams();
    const navigation = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

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
                navigation('/', {replace:true})
            });
        }
    }, [navigation, id])

    function salvarfilme() {
        const minhaLista = localStorage.getItem("@filmes");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilmes =filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)

        if (hasFilmes) {
            console.log("existe um filme")
            return
        } 

        filmesSalvos.push(filme)
        localStorage.setItem("@filmes",JSON.stringify(filmesSalvos))
        alert("Filme salvo com sucesso")
    }

    if(loading){
        return(
            <div className='Filme-info'>
                <p>Carregando os dados do Filme</p>
            </div>
        )
    }
    
    return(
        <div className='Filme-info'>
            <h1>{filme.title}</h1>

            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span><br></br>

            <h3>Avaliação</h3>
            <span>{filme.vote_average}</span>
           
            <h3>linguagem</h3>
            <span>{filme.original_language}</span>

            <button class="meu-botao" onClick={salvarfilme}>Salvar</button>
            <button class="meu-botao"><a href={`https://www.youtube.com/results?search_query=${filme.title}+trailer`}>Ver trailer</a></button>


        </div>
    );
}

export default Filme;