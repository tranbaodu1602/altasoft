import React, { useState } from "react";
import "./HeaderComponent.css";
import imgHeader from "../../assets/Img/Frame.png";
import headerIcon from "../../assets/Img/Component.png";

const HeaderComponent = () => {
  const menuItems = [
    { id: "cong-dong-song-xanh", label: "CỘNG ĐỒNG SỐNG XANH" },
    { id: "ban-do-xanh", label: "BẢN ĐỒ XANH" },
    { id: "tai-khoan", label: "TÀI KHOẢN CỦA TÔI" },
    { id: "bang-xep-hang", label: "BẢNG XẾP HẠNG" },
    { id: "dieu-khoan", label: "ĐIỀU KHOẢN VÀ THỂ LỆ" },
  ];

  const [activeMenu, setActiveMenu] = useState("");
  const [selected, setSelected] = useState("ai");

  // Hàm thay đổi item được chọn
  const handleSelect = (item) => {
    setSelected(item);
  };
  return (
    <header className="container">
      <div className="header">
        <div className="header-logo">
          <img src={imgHeader} alt="Logo1" />
        </div>
        {/* Menu ở giữa */}
        <nav className="header-menu">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`menu-item ${activeMenu === item.id ? "active" : ""}`}
              onClick={() => setActiveMenu(item.id)} // Đánh dấu item được chọn
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-icon">
          <img src={headerIcon} alt="Icon" className="icon" />
        </div>
      </div>
      <div className="bottom">
        <div className="menu-select">
          <div
            className={`item1 item ${selected === "ai" ? "selected" : ""}`}
            onClick={() => handleSelect("ai")}
          >
            Phân tích AI
          </div>
          <div
            className={`item2 item ${selected === "life" ? "selected" : ""}`}
            onClick={() => handleSelect("life")}
          >
            Khám phá phong cách thuần khiết
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
