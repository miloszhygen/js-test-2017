import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import {bindActionCreators} from 'redux';
import GifItem from '../components/GifItem';

class Favorites extends Component {
  componentWillMount() {
    this.props.actions.fetchFavoritedGifs();
  }

  render() {
    const gifsArray = this.props.gif.gifs.fav;
    const gifsList = gifsArray.map((gif, index)=>
      <GifItem  key={index}
                gif={gif}
                onFavoriteSelect={ selectedGif => this.props.actions.favoriteGif({selectedGif}) }
                onFavoriteDeselect={ selectedGif => this.props.actions.unfavoriteGif({selectedGif}) }
                isFavorite={true}
              />
    )

    return (
      <div>
        <div className="row">
          <h5 className="small-12 text_center columns">My Favorites</h5>
        </div>
        <div className="row">{gifsList}</div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    gif:store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(Actions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
