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
              <li>
                Bottomwear
                <ul>
                  <li>jeans</li>
                  <li>casual trousers</li>
                  <li>formal trousers</li>
                  <li>shorts</li>
                  <li>track pants & joggers</li>
                </ul>
              </li>
              <li>
                <ul>
                  innerwear
                  <li>Briefs & trunks</li>
                  <li>Boxers</li>
                  <li>vests</li>
                  <li>sleepwear & lounge</li>
                </ul>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        );
      case "women":
        return <ul className={style}>women</ul>;
      default:
        return null;
    }
  }
  return <></>;
};

export default HoverMenu;
