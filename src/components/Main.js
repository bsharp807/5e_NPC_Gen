import React, { Component } from 'react';
import Menu from '../menu/Menu';
import CharacterContainer from '../containers/CharacterContainer';
import AllCharacterContainer from '../containers/AllCharacterContainer';
import CreateCharacterContainer from '../containers/CreateCharacterContainer';

class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      menuReveal: true,
      individualCharacterReveal: false,
      allCharacterReveal: false,
      createCharacterReveal: false,
      characterViewIndex: 0
    }

    this.determineRender = this.determineRender.bind(this)
    this.setReveal = this.setReveal.bind(this)
  }

  setReveal(revealObject){
    this.setState(revealObject)
  }

  determineRender(){
    if(this.state.menuReveal){
      return <Menu setReveal= {this.setReveal} characterViewIndex= {this.state.characterViewIndex}/>
    } else if(this.state.individualCharacterReveal){
      return <CharacterContainer />
    } else if(this.state.allCharacterReveal){
      return <AllCharacterContainer viewChar= {this.setReveal} />
    } else if(this.state.createCharacterReveal){
      return <CreateCharacterContainer />
    }
  }

  render() {
    return(
      <div>
        {this.determineRender()}
      </div>
    )
  }

}

export default Main;
