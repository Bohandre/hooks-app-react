import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, RickAndMortyQuote } from "../03-examples";


export const Layout = () => {

    const {  counter, increment } = useCounter( 1 );

    const { data, isLoading, hasError } = useFetch( `https://rickandmortyapi.com/api/character/${ counter }` );

    // console.log( { data, isLoading, hasError } );

  return (

    <>
        <h1>Rick and Morty</h1>
        <hr/>

        {
            isLoading
                ? <LoadingQuote />
                : <RickAndMortyQuote data={ data } />     
        }

        <button 
            className="btn btn-primary"
            disabled={ isLoading }
            onClick={ () => increment() }>
            Next Character
        </button>

    </>
    
  )
}
