import React from "react";

const MemberCard = ({ propsMember }) => {
  const listMember = propsMember.map((mapMember) => {
    return (
      <div className="row" key={mapMember.index}>
        <div className="col">
          <img
            className="rounded-circle profile-picture"
            alt=""
            src={mapMember.picture}
          />
        </div>
        <div className="col">
          <div className="row">
            <a>{mapMember.namaMember}</a>
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
  });
  return <div>{listMember}</div>
};

export default MemberCard;
