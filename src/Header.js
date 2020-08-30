import React from "react";
import MenuTab from "./MenuTab";
import SearchBox from "./SearchBox";
import Content from "./Content";

const Header = () => {
  return (
    <div className="container">
      <h5>Undang Peserta Terbaik untuk Tim Baru mu!</h5>
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
