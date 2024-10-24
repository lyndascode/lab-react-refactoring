import React from 'react'
import classes from '../styles/CharacterCard.module.css'

class CharacterCard extends React.Component {
  render() {
    const { character } = this.props

    return (
      <div className={classes.ctn}>
        <img className={classes.img} src={character.image} alt={character.name} />
        <div className={classes.content}>
          <h2>{character.name}</h2>
          <p>{character.species}</p>
          <p>{character.status}</p>
        </div>
      </div>
    )
  }
}

export default CharacterCard
