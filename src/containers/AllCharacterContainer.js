import AllCharacterDisplay from '../allCharacterDisplay/AllCharacterDisplay';
import { connect } from 'react-redux';

const RequestHelper = require('../helpers/request_helper.js')
const configFile = require('../config/config.js')

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
};

const mapDispatchToProps = dispatch => ({
  getSelectedCharacter(index){
    dispatch(() => {
      RequestHelper.get(`${configFile.char}${index}`)
      .then(character => {
        dispatch({
          type: 'UPDATE_SELECTED_CHARACTER',
          character: character[0]
        })
      })
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(AllCharacterDisplay);
