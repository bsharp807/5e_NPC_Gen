import CreateCharacterDisplay from '../createCharacterDisplay/CreateCharacterDisplay';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    attributes: state.attributes
  }
};

export default connect(mapStateToProps)(CreateCharacterDisplay);
