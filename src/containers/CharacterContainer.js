import CharacterDisplay from '../characterDisplay/CharacterDisplay';
import { connect } from 'react-redux';

const RequestHelper = require('../helpers/request_helper');
const configFile = require('../config/config');


const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
};

export default connect(mapStateToProps)(CharacterDisplay);
