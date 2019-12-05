import CharacterDisplay from '../characterDisplay/CharacterDisplay';
import { connect } from 'react-redux';

const RequestHelper = require('./helpers/request_helper');
const configFile = require('./config/config');


const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
};

const mapDispatchToProps = (dispatch) => ({
  addQuestion(data) {
    dispatch(() => {
      fetch('http://localhost:3000/questions', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
      }
      )
      .then(res => res.json())
      .then(questionsData => {
        dispatch({
          type: 'LOAD_QUESTIONS_DATA',
          questionsData
        })
        dispatch({
          type: 'UPDATE_FILTER',
          filterArray: filteringMechanism(questionsData)
          })
      })
    })
  }
})

export default connect(mapStateToProps)(CharacterDisplay);
