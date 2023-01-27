import React from "react";

export default class FollowButton extends React.Component {
  //constructor(props) {
  //  super(props);
  //  //this.#handleClick = this.#handleClick.bind(this);
  //  this.state = {
  //    followers: parseInt(this.props.followers, 10)
  //  };
  //}

  #handleClick = () => {
    console.log('FollowButton.#handleClick()');
    //this.props.followers += 1;
    //this.state.followers += 1;
    //this.render();
    //this.setState((state,props) => {
    //  return {
    //    followers: state.followers + 1
    //  };
    //});
    this.props.onfollow();
  }

  render() {
    console.log("FollowButton.render()");

    const followers = this.props.followers;

    return(
      <button type="button" onClick={ this.#handleClick } className="btn btn-primary position-relative btn-rounded btn-lg">
        Follow Me 
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          { followers } <span className="visually-hidden">followers</span>
        </span>
      </button>      
    );
  }
}