import React from "react";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";

const Movie = () => {
  return (
    <div style={{width:"95%",height:"100%"}} className=" mx-auto bg-primary">
      <div className="row">
        <div className="col-sm-8">
          <div style={{ textAlign: "center" }}>
            <h1>đặt vé xem phim cyberlear.vn</h1>
            <h6>màn hình</h6>
          </div>
          <MovieList/>
        </div>
        <div className="col-sm-4">
          <div style={{ textAlign: "center" }}>
            <h2>Danh sách ghế đã chọn </h2>
          </div>
         <div className="d-flex "style={{marginBottom:"10px"}}>
         <div style={{backgroundColor:"orange", width:"30px",height:"30px",marginRight:"10px"}}></div>
          <span>ghế đã đặt</span>
         </div>
         <div className="d-flex" style={{marginBottom:"10px"}}>
         <div style={{backgroundColor:"green", width:"30px",height:"30px",marginRight:"10px"}}></div>
          <span>ghế đang chọn</span>
         </div>
         <div className="d-flex" style={{marginBottom:"10px"}}>
         <div style={{backgroundColor:"white", width:"30px",height:"30px",marginRight:"10px"}}></div>
          <span>ghế chưa đặt</span>
         </div>
          <MovieDetail/>
        </div>
      </div>
    </div>
  );
};

export default Movie;
