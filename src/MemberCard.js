import React from "react";

const MemberCard = () => {
  return (
    <div className="row">
      <div className="col">
        <img
          className="rounded-circle profile-picture"
          alt=""
          src="http://placehold.it/32x32"
        />
      </div>
      <div className="col">
        <div className="row">
          <a>CHRISTINE NATALIE</a>
        </div>
        <div className="row">
          <a>Desainer Olive Oil </a> <a> Animasi</a>
        </div>

        <div className="row">
          <div className="col">
            <i className="fa fa-star">4.9</i>
          </div>
          <div className="col">
            <i className="fa fa-trophy"> 15</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
