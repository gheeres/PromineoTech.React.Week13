import React from "react";
import FollowButton from "./FollowButton";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: parseInt(this.props.user.followers, 10)
    };
  }

  #handleFollow = () => {
    console.log(`someone followed ${ this.props.name }`);
    this.setState((state,props) => {
      //console.log(state);
      //console.log(props);
      return {
        followers: state.followers + 1
      };
    });
  }

  render() {
    console.log("Profile.render()");

    const followers = this.state.followers || 0;
    const name = this.props.user.name;
    const imageUrl = this.props.user.image;
    const title = this.props.user.title;
    const domain = this.props.user.domain;

    return(
      <div className="card profile-card">
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <img src={ imageUrl }
                 className="rounded-circle img-fluid profile-image" 
                 alt={ name } />
          </div>
          <h4 className="mb-2">{ name } <sup className="text-muted">({ followers })</sup></h4>
          <p className="text-muted mb-4">@{ title } <span className="mx-2">|</span> <a
             href="#!">{ domain }</a></p>
          <div className="mb-4 pb-2">
            <button type="button" className="btn btn-outline-primary btn-floating">
              <i className="bi bi-facebook"></i>
            </button>
            <button type="button" className="btn btn-outline-primary btn-floating mx-1">
              <i className="bi bi-twitter"></i>
            </button>
            <button type="button" className="btn btn-outline-primary btn-floating">
              <i className="bi bi-skype"></i>
            </button>
          </div>
          <FollowButton onfollow={ this.#handleFollow } followers={ followers } />
        </div>
      </div>
    );
  }
}