import React from "react";
import CountdownTimer from "./Countdown";

const Sale = () => {
  return (
    <div className='sale bg-[linear-gradient(90deg,#f9f9ff,#dee8ff)] flex py-4 justify-center gap-2'>
      Sale Ends IN <CountdownTimer />
    </div>
  );
};

export default Sale;
