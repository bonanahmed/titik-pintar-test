import React from "react";

const MemberCard = () => {
  return (
    <div className="row">
      <div className="col">
        <img alt="" src="http://placehold.it/32x32" />
      </div>
      <div className="col">
        <div className="row">
          <a>Full Name</a>
          <a>Jobs Name</a> <a>Jobs</a>
        </div>
        <div className="row">
          <a>Rating</a> <a>award</a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
