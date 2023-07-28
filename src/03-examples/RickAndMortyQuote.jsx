import { useLayoutEffect, useRef, useState } from "react"

export const RickAndMortyQuote = ( { data } ) => {

  const pRef = useRef();
  const [] = useState()

  useLayoutEffect(() => {
    
  })

  return (
    <blockquote className="blockquote text-center">
            <div className="card">
                    <img src={ data.image } />
            </div>
            <p className="mb-1">Name: { data.name }</p>
            <hr/>
            <footer className="blockquote-footer">location: { data.location.name }</footer>
            <footer className="blockquote-footer">Species: { data.species }</footer>
            <footer className="blockquote-footer">Origin: { data.origin.name }</footer>
    </blockquote>
  )
}
