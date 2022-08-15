import React,{useState} from "react";
import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
const MovieList = () => {
  // const[color,setColor]  = useState("light")
  const { tickets } = useSelector((state) => state.movies);
  console.log(tickets);
  return (
    <div className="row">
      {tickets.map((item) => {
        return (
          <div className="row" key={item.row}>
            <div style={{textAlign:"right"}} className="col-sm-1">{item.row}</div>
            <div className="col-sm-11">
              <MovieItem item={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
