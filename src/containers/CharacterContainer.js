import CharacterDisplay from '../characterDisplay/CharacterDisplay';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
};

export default connect(mapStateToProps)(CharacterDisplay);
