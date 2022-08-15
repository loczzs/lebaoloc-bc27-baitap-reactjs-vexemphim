import React,{useState} from "react";
// import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";

const MovieItem = ({ item }) => {
  // const[color,setColor]  = useState("light")

  const { carts } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
     const handleaddTocart = (seat)=>{
      // setColor("success")
        dispatch({type:"addTocart",seat})
        // setColor("success")
     }

  // console.log(item.seats)
  return (
    <div className="row">
      {item.seats.map((seat) => {
        let ccssghedadat ="btn btn-light"
        let disabled = false
        if(seat.booked){
          ccssghedadat = "btn btn-warning"
          disabled = true
        }
        if(carts.length >0){
          const newCarsz = carts.map((item)=>{
            if(item.name === seat.name ){
              ccssghedadat = "btn btn-success"
            }
            return item
          })
          {/* newCarsz */}
        }
        return (
          
          <div key={seat.name} style={{ marginBottom: "10px" }} className="col-sm-1">
            <button
              style={{ width: "100%", opacity: "1" }}
              className={` ${ccssghedadat} `}
              disabled={disabled}
              onClick = {()=>handleaddTocart(seat)}
            >
              {seat.name}
            </button>
          </div>
        );
      })}
     <div>
     {/* <button className="btn btn-warning">đặt vé </button> */}
     </div>
    </div>
    
  );
};

export default MovieItem;
