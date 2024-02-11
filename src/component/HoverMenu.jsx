import React from "react";

const HoverMenu = ({ data }) => {
  let style = "fixed top-[82px] left-44 bg-[white] w-9/12 h-[400px] z-50";
  if (data.hidden === false) {
    switch (data.on) {
      case "men":
        return (
          <div className={style}>
            <ul className='text-[red]'>
              <li>
                TopWears
                <ul className='text-black'>
                  <li>T-shirts</li>
                  <li>casual shirts</li>
                  <li>formal shirts</li>
                  <li>sweat shirts</li>
                  <li>sweaters</li>
                  <li>jackets</li>
                  <li>blazers</li>
                  <li>suits</li>
                </ul>
              </li>
              <li>
                indian & festive
                <ul className='text-black'>
                  <li>kurta</li>
                  <li>sherwani</li>
                  <li>nehru jacket</li>
                  <li>Dhotis</li>
                </ul>
              </li>
            </ul>
          </div>
        );
      case "women":
        return <ul className={style}>women</ul>;
      case "kids":
        return <ul className={style}>kids</ul>;
        case "home":
            return <ul className={style}>home & living</ul>
        case "studio":
            return <ul className={style}>studio</ul>
        case "beauty":
            return <ul className={style}>beauty</ul>
        default:
        return null;
    }
  }
  return <></>;
};

export default HoverMenu;
