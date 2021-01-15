import React from "react";
import TuneIcon from "@material-ui/icons/Tune";

const Filter = () => {
  return (
    <div className="">
      <div className="flex">
        <form className="filter">
        <p>
          <TuneIcon />
          Filter by
        </p>
          <input type="date" placeholder="email" id="date" className="date"/>
          <input type="text" placeholder="genre" id="genre" className="genre" />
          <input type="text" placeholder="producer" id="producer" className="producer"/>
          <a>
            <input className="btnn" type="submit" value="submit" />
          </a>
        </form>
      </div>
      <style jsx>
        {`
          .filter {
            width: 50%;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 3%;
            margin-top: 3%;
            padding-bottom: 1%;
            padding-top: 1%;
            border-radius: 10px;
          }
          .flex {
            display: flex;
            justify-content: space-between;
            
          }
          p {
            color: white;
            margin-top: 1rem;
            margin-left: 2rem;
            font-size: 20px;
            color: #000000;
          }
          .date {
            margin-right: 2rem;
          }
          select {
            text-align: center;
            padding: 1%;
            border: none;
            border-radius: 7px;
            appearance: none;
            background: #80d0c7;
          }
          select:after {
            text-align: center;
            padding: 1%;
            border: none;
            border-radius: 7px;
            appearance: none;
            background: #80d0c7;
          }
        `}
      </style>
    </div>
  );
};

export default Filter;
