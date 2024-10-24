import React from 'react'
import CharacterCard from '../components/CharacterCard'
import classes from '../styles/HomePage.module.css'
import Pagination from '../components/Pagination'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      numberOfPages: 1,
      currentPage: 1,
    }
  }

  getCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.currentPage}`
      )
      if (response.ok) {
        const data = await response.json()
        this.setState({
          characters: data.results,
          numberOfPages: data.info.pages,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getCharacters()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.getCharacters()
    }
  }

  handlePreviousPage = () => {
    if (this.state.currentPage > 1) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 1,
      }))
    }
  }

  handleNextPage = () => {
    if (this.state.currentPage < this.state.numberOfPages) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1,
      }))
    }
  }

  render() {
    return (
      <>
        <ul className={classes.listCtn}>
          {this.state.characters.map(character => (
            <li key={character.id}>
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>
        <Pagination
          currentPage={this.state.currentPage}
          numberOfPages={this.state.numberOfPages}
          handlePreviousPage={this.handlePreviousPage}
          handleNextPage={this.handleNextPage}
        />
      </>
    )
  }
}

export default HomePage
