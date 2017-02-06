import React, { Component } from 'react';

export default class gifItem extends Component{
  constructor(props) {
    super(props);
    this.state = { favorited: this.props.isFavorite };
  }

  favGif() {
    this.setState({ favorited: true });
    this.props.onFavoriteSelect(this.props.gif);
  }

  unFavGif() {
    this.props.onFavoriteDeselect(this.props.gif);
  }

  renderFavoriteHeart() {
    if (this.state.favorited) {
      return <i className="favorite fa fa-heart" onClick={() => this.unFavGif()} />;
    }
    return <i className="favorite fa fa-heart-o" onClick={() => this.favGif()} />;
  };
  
  render() {
    return (
      <div className="small-12 medium-4 large-3 columns gifitem">
        <div className="gifitem_container">
          { this.renderFavoriteHeart() }
           <div className="gifitem_img" style={{backgroundImage: 'url(' + this.props.gif.images.downsized_large.url + ')'}} />
        </div>
      </div>
    )
  }
}
