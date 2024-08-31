import React from "react";

function Cards() {
  return (
    <div className="w-full  h-scree py-32 flex px-32 items-center gap-5 bg-zinc-100">
      <div className="cardcontaionar  h-[50vh] w-1/2">
        <div className="card relative w-full rounded-lg flex items-center justify-center h-full bg-[#004D43]">
          <img
            className="bg-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute left-10 rounded-full text-white bottom-10 px-5 py-1 border-2">
            &copy ;200
          </button>
        </div>
      </div>
      <div className="cardcontaionar  gap-5  flex h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-lg bg-[#082521]">
          <img
            className="bg-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute left-10 rounded-full text-white bottom-10 px-5 py-1 border-2">
            &copy ;200
          </button>
        </div>
        <div className="card flex items-center justify-center relative w-1/2 h-full rounded-lg bg-[#082521]">
          <img
            className="bg-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute left-10 rounded-full text-white bottom-10 px-5 py-1 border-2">
            &copy ;200
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
