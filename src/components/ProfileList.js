import React from "react";
//import UserProfileService from '../services/UserProfileService.js';
import UserProfileService from "../services/RandomUserProfileService.js";
import Profile from "./Profile.js";

const profileService = new UserProfileService();

export default class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    profileService.all().then((users) => {
      this.setState({
        users: [ ...users ]
      });
    });
  }
  render() {
    const users = this.state.users;
    console.log(`ProfileList.render(${ users })`);

    let items = [];
    users.forEach((user) => {
      items.push(
        <div key={ user.id } className="col-md-12 col-xl-4">
          <Profile user={ user } />
        </div>
      );
    });

    return (
      <>
      { items }
      </>
    );
  }
};
