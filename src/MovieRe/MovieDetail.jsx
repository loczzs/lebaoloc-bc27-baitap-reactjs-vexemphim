import React ,{useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
const MovieDetail = () => {
  // const[color,setColor]  = useState("light")
  const { carts } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const handleRemove = (cartName)=>{
    dispatch({type:"removeCart",cartName})
  }
   const  finishMo = ()=>{
    dispatch({type:"finish"})
   }
  const sum = carts.reduce((total,value)=>{
    return total + value.price
  },0)
  return (
    <table className='table'>
        <thead>
            <tr>
              <th>số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
             
              
            </tr>
          </thead>
          <tbody>
            {carts.map((cart)=>{
              return(
                <tr key= {cart.name}>
                  <td>{cart.name}</td>
                  <td>{cart.price}</td>
                  <td><button onClick={()=>handleRemove(cart.name)} className='btn btn-danger'>
                    x
                  </button></td>
                </tr>
              )
            })}
            <tr>
              <td>Tổng tiền</td>
              <td>{sum}</td>
              <td><button onClick={finishMo}  className='btn btn-warning'>Đặt vé</button></td>
            </tr>
          </tbody>
          <br />
          <br />
          
    </table>
  )
}

export default MovieDetail