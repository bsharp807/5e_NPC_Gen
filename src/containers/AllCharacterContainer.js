import AllCharacterDisplay from '../allCharacterDisplay/AllCharacterDisplay';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
};

export default connect(mapStateToProps)(AllCharacterDisplay);
