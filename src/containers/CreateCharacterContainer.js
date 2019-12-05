import CreateCharacterDisplay from '../createCharacterDisplay/CreateCharacterDisplay';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
};

export default connect(mapStateToProps)(CreateCharacterDisplay);
