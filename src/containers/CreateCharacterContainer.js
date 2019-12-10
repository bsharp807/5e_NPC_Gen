import CreateCharacterDisplay from '../createCharacterDisplay/CreateCharacterDisplay';
import { connect } from 'react-redux';

const RequestHelper = require('../helpers/request_helper')
const configFile = require('../config/config')

const mapStateToProps = (state) => {
  return {
    attributes: state.attributes
  }
};

const mapDispatchToProps = dispatch => ({
  postCreatedCharacter(payload){
    RequestHelper.post(configFile.char, payload)
    .then((characters) => {
      dispatch({
        type: 'UPDATE_SELECTED_CHARACTER',
        character: characters[characters.length-1]
      })
    })
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateCharacterDisplay);
