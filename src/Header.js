import React from "react";
import MenuTab from "./MenuTab";
import SearchBox from "./SearchBox";
import Content from "./Content";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <h6>Undang Peserta Terbaik untuk Tim Baru mu!</h6>
      </div>
      <MenuTab>
        <div label="Desainer">
          <SearchBox />
          <Content />
        </div>
        <div label="Guru">
          <SearchBox />
        </div>
      </MenuTab>
    </div>
  );
};

export default Header;
