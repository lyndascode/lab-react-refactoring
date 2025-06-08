import { useEffect } from 'react'
import CharacterCard from '../components/CharacterCard'
import classes from '../styles/HomePage.module.css'
import Pagination from '../components/Pagination'
import { useState } from 'react'
import React from 'react'
function HomePage() {
  //        état          fonction pour le modifier       valeur initiale
  // const [    X       ,      setX                        ] = useState(valeur);
  const API_URL = `https://rickandmortyapi.com/api`

  const [characters, setCharacters] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);


  async function getCharacters(params) {
    try {
      const response = await fetch(`${API_URL}/character?page=${currentPage}`)
      const data = await response.json()
      setCharacters(data.results)
      setNumberOfPages(data.info.pages)
    }
    catch (error) {
      console.log(error)
    }
  }

  /*Pourquoi useEffect ici ?
✅ Parce qu’on veut fetcher des données

✅ Mais seulement quand currentPage change

✅ Pour éviter d’appeler l’API en boucle

✅ Parce qu’un composant React fonctionnel n’a pas de componentDidMount()

*/


  const handleNextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const handlePreviousPage = (() => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  })

  useEffect(() => { //Appelle une fonction quand quelque chose change
    getCharacters(); //Fait le fetch des persos

  }, [currentPage]) //On exécute l’effet quand la page change

  /* pour characters et numberOfPages,  Est-ce que je veux afficher cette donnée à l’utilisateur ?
  Une liste de personnages à afficher ? → characters
 
 Le numéro de la page actuelle ? → currentPage
 
 Le total de pages pour afficher une pagination ? → numberOfPages
  */




  return (<>
    <div>HomePage</div>
    <ul className={classes.listCtn}>
      {characters.map(character => <li key={character.id}>  <CharacterCard character={character} /> </li>)}
    </ul>
    <Pagination
      currentPage={currentPage}
      numberOfPages={numberOfPages}
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
    />

  </>)
}


export default HomePage
