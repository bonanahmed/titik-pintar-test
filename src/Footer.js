import React from "react";
import Recipient from "./Recipient";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        {/* <Recipient /> */}
        <button type="button" className="btn btn-primary btn-lg btn-block">
          <i className="fa fa-user-plus"></i> Undang Bergabung
        </button>
      </div>
    </footer>
  );
};

export default Footer;
