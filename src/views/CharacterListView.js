import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.isFetching ? <h3>loading...</h3>
          :
          <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.characters} />
          </div>
        }
        {this.props.error && <p className="error">{this.props.error}</p>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error     : state.charsReducer.error,
  isFetching: state.charsReducer.isFetching,
})

export default connect( mapStateToProps, { getCharacters })(CharacterListView);
