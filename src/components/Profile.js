import React from "react";
import FollowButton from "./FollowButton";

export default class Profile extends React.Component {
  render() {
    console.log("Profile.render()");

    const name = this.props.name;
    const avatar = this.props.avatar;
    const avatarUrl = `https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/${ avatar }`;

    return(
      <div className="card profile-card">
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <img src={ avatarUrl }
                 className="rounded-circle img-fluid profile-image" />
          </div>
          <h4 className="mb-2">{ name }</h4>
          <p className="text-muted mb-4">@Programmer <span className="mx-2">|</span> <a
             href="#!">heeresonline.com</a></p>
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
          <FollowButton />
        </div>
      </div>
    );
  }
}