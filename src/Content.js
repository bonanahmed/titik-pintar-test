import React, { Component } from "react";
import MemberCard from "./MemberCard";

class Content extends Component {
  state = {
    member: [
      {
        index: 0,
        _id: "5f422e5dea094c95617bab2c",
        namaMember: "Christine Natalie",
        picture: "http://placehold.it/32x32",
      },
      {
        index: 1,
        _id: "5f422e5d1e59d68513a86be1",
        namaMember: "Deddy Rachman",
        picture: "http://placehold.it/32x32",
      },
      {
        index: 2,
        _id: "5f422e5d1b32ffab63edbbfd",
        namaMember: "ALDO Fernando",
        picture: "http://placehold.it/32x32",
      },
      {
        index: 3,
        _id: "5f422e5d2ac0bf4c7d524169",
        namaMember: "ALexandro grahamn",
        picture: "http://placehold.it/32x32",
      },
    ],
  };

  render() {
    return (
      <div className="container-fluid">
        <MemberCard propsMember={this.state.member}/>
      </div>
    );
  }
}

export default Content;
