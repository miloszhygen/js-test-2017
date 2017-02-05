import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import GifItem from '../components/GifItem';

function mapStateToProps(store) {
  return {
      gif:store
  };
}
function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(Actions,dispatch)
  };
}

class Home extends Component {
  componentWillMount(){
    this.props.actions.fetchTrendingGifs()
  }

  render() {
    const gifsArray = (this.props.gif.gifs.fetched)?this.props.gif.gifs.gifs.data.data:[];
    const gifsList = gifsArray.map(gif =>
      <GifItem  key={gif.id}
                gif={gif}
                onFavoriteSelect={ selectedGif => this.props.actions.favoriteGif({selectedGif}) }
                onFavoriteDeselect={ selectedGif => this.props.actions.unfavoriteGif({selectedGif}) }
                isFavorite={gif.isFavorite}
              />
    );
    return(
        <div className="row">{gifsList}</div>
   );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
