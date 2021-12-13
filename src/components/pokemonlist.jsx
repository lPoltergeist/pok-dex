import { useState } from 'react';
import axios from 'axios';

import pokemonColors from '../styles/pokemonTypes';

import { Title, Search, Section, Pokemons, Form, Info } from '../styles/pokemonlist'

import logoImg from '../assets/pokeball.png'

export default function Pokemonlist() {
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([])
    const [pokemonType, setPokemonType] = useState("")


 //   useEffect(() => {
 //       axios.get(currentURL).then(res => {
 //           setPokemons(res.data.results.map(p => p))
 //       })
 //   }, [currentURL])

const getPokemon = async() => {
    const toArray = [];
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url)
        toArray.push(res.data);
        setPokemonType(res.data.types[0].type.name)
        setPokemonData(toArray)
      
    } catch(e) {
        console.log(e)
    }
} 

const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
}

const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
}

return (
    
    <Section>
        <Search>
        <Title>  
            <img src={logoImg} alt="pokeball" />
    Pokédex 
    </Title>
    <Form onSubmit={handleSubmit}>
        <label>
    <input onChange={handleChange} placeholder='Pokémon name' />
    <button type="submit">Catch!</button>
    </label>
    </Form>
    </Search>
   
        <Pokemons >
{pokemonData.map((data) => {

    return (
        <>
        <div>
          
</div>

<div className="img">
            <img src={data.sprites.front_default} alt="charmander"/>
         
</div>
         <Info>

                <strong  className="Types" type='electric'> Type: {pokemonType} </strong>

               <strong> Height: {data.height}''</strong>

            <strong> Weight: {data.weight}</strong>

            <strong id="Pokedex n°" key={data.order}> Pokedex n°: {data.order}  </strong>
        
       </Info>
       </>
    )
})}
            </Pokemons>
       
    </Section>
    
)

}