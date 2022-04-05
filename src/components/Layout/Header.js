import React from "react";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

const Header = () => {
  let mainImageUrl =
    "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  return (
    <>
      <header className={classes.header}>
        <h1>SandorMeals</h1>
        <HeaderCartButton />
      </header>
      <div>
        {/* TODO: make it parallax with JS (multiparallax effect) */}
        <img
          style={{
            objectFit: "cover",
            objectPosition: "50% 57%",
            width: "100%",
            height: "300px",
            filter: "brightness(73%)",
          }}
          // className={classes["main-image"]}
          src={mainImageUrl}
          alt='Restaurant'
        />
      </div>
    </>
  );
};

export default Header;
