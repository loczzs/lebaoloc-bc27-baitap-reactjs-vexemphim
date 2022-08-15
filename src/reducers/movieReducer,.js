const sus  = "light"
const initialState = {
    tickets:[
        {
          "row": "A",
          "seats": [
            { "name": "A1", "price": 75000, "booked": false ,color:sus },
            { "name": "A2", "price": 75000, "booked": false ,color:sus },
            { "name": "A3", "price": 75000, "booked": false,color:sus },
            { "name": "A4", "price": 75000, "booked": false ,color:sus},
            { "name": "A5", "price": 75000, "booked": false ,color:sus},
            { "name": "A6", "price": 75000, "booked": false ,color:sus},
            { "name": "A7", "price": 75000, "booked": false,color:sus },
            { "name": "A8", "price": 75000, "booked": false ,color:sus},
            { "name": "A9", "price": 75000, "booked": false ,color:sus},
            { "name": "A10", "price": 75000, "booked": false ,color:sus},
            { "name": "A11", "price": 75000, "booked": true ,color:sus},
            { "name": "A12", "price": 75000, "booked": true ,color:sus}
          ]
        },
        {
          "row": "B",
          "seats": [
            { "name": "B1", "price": 75000, "booked": false,color:sus },
            { "name": "B2", "price": 75000, "booked": false,color:sus },
            { "name": "B3", "price": 75000, "booked": false ,color:sus},
            { "name": "B4", "price": 75000, "booked": false,color:sus },
            { "name": "B5", "price": 75000, "booked": false ,color:sus},
            { "name": "B6", "price": 75000, "booked": false,color:sus },
            { "name": "B7", "price": 75000, "booked": false ,color:sus},
            { "name": "B8", "price": 75000, "booked": false,color:sus },
            { "name": "B9", "price": 75000, "booked": false ,color:sus},
            { "name": "B10", "price": 75000, "booked": false ,color:sus},
            { "name": "B11", "price": 75000, "booked": false ,color:sus},
            { "name": "B12", "price": 75000, "booked": false ,color:sus}
          ]
        },
        {
          "row": "C",
          "seats": [
            { "name": "C1", "price": 75000, "booked": false ,color:sus},
            { "name": "C2", "price": 75000, "booked": false ,color:sus},
            { "name": "C3", "price": 75000, "booked": false ,color:sus},
            { "name": "C4", "price": 75000, "booked": false ,color:sus},
            { "name": "C5", "price": 75000, "booked": false ,color:sus},
            { "name": "C6", "price": 75000, "booked": false ,color:sus},
            { "name": "C7", "price": 75000, "booked": false ,color:sus},
            { "name": "C8", "price": 75000, "booked": false ,color:sus},
            { "name": "C9", "price": 75000, "booked": false ,color:sus},
            { "name": "C10", "price": 75000, "booked": false ,color:sus},
            { "name": "C11", "price": 75000, "booked": false,color:sus},
            { "name": "C12", "price": 75000, "booked": false ,color:sus}
          ]
        },
        {
          "row": "D",
          "seats": [
            { "name": "D1", "price": 75000, "booked": false ,color:sus },
            { "name": "D2", "price": 75000, "booked": false ,color:sus },
            { "name": "D3", "price": 75000, "booked": false ,color:sus },
            { "name": "D4", "price": 75000, "booked": false ,color:sus },
            { "name": "D5", "price": 75000, "booked": false ,color:sus },
            { "name": "D6", "price": 75000, "booked": false ,color:sus },
            { "name": "D7", "price": 75000, "booked": false ,color:sus },
            { "name": "D8", "price": 75000, "booked": false ,color:sus },
            { "name": "D9", "price": 75000, "booked": false ,color:sus },
            { "name": "D10", "price": 75000, "booked": false ,color:sus },
            { "name": "D11", "price": 75000, "booked": false ,color:sus },
            { "name": "D12", "price": 75000, "booked": false ,color:sus }
          ]
        },
        {
          "row": "E",
          "seats": [
            { "name": "E1", "price": 75000, "booked": false ,color:sus },
            { "name": "E2", "price": 75000, "booked": false ,color:sus },
            { "name": "E3", "price": 75000, "booked": false ,color:sus },
            { "name": "E4", "price": 75000, "booked": false ,color:sus },
            { "name": "E5", "price": 75000, "booked": false ,color:sus },
            { "name": "E6", "price": 75000, "booked": false ,color:sus },
            { "name": "E7", "price": 75000, "booked": false ,color:sus },
            { "name": "E8", "price": 75000, "booked": false ,color:sus },
            { "name": "E9", "price": 75000, "booked": false ,color:sus },
            { "name": "E10", "price": 75000, "booked": false ,color:sus },
            { "name": "E11", "price": 75000, "booked": false ,color:sus },
            { "name": "E12", "price": 75000, "booked": false ,color:sus }
          ]
        },
        {
          "row": "F",
          "seats": [
            { "name": "F1", "price": 75000, "booked": false ,color:sus },
            { "name": "F2", "price": 75000, "booked": false ,color:sus },
            { "name": "F3", "price": 75000, "booked": false ,color:sus },
            { "name": "F4", "price": 75000, "booked": false ,color:sus },
            { "name": "F5", "price": 75000, "booked": false ,color:sus },
            { "name": "F6", "price": 75000, "booked": false ,color:sus },
            { "name": "F7", "price": 75000, "booked": false ,color:sus },
            { "name": "F8", "price": 75000, "booked": false ,color:sus },
            { "name": "F9", "price": 75000, "booked": false ,color:sus },
            { "name": "F10", "price": 75000, "booked": false ,color:sus },
            { "name": "F11", "price": 75000, "booked": false ,color:sus },
            { "name": "F12", "price": 75000, "booked": false ,color:sus }
          ]
        },
        {
          "row": "G",
          "seats": [
            { "name": "G1", "price": 75000, "booked": false ,color:sus },
            { "name": "G2", "price": 75000, "booked": false ,color:sus },
            { "name": "G3", "price": 75000, "booked": false ,color:sus },
            { "name": "G4", "price": 75000, "booked": false ,color:sus },
            { "name": "G5", "price": 75000, "booked": false ,color:sus },
            { "name": "G6", "price": 75000, "booked": false ,color:sus },
            { "name": "G7", "price": 75000, "booked": false ,color:sus },
            { "name": "G8", "price": 75000, "booked": false ,color:sus },
            { "name": "G9", "price": 75000, "booked": false ,color:sus },
            { "name": "G10", "price": 75000, "booked": false ,color:sus },
            { "name": "G11", "price": 75000, "booked": false ,color:sus },
            { "name": "G12", "price": 75000, "booked": false ,color:sus }
          ]
        },
        {
          "row": "H",
          "seats": [
            { "name": "H1", "price": 75000, "booked": false ,color:sus },
            { "name": "H2", "price": 75000, "booked": false ,color:sus },
            { "name": "H3", "price": 75000, "booked": false ,color:sus },
            { "name": "H4", "price": 75000, "booked": false ,color:sus },
            { "name": "H5", "price": 75000, "booked": false ,color:sus },
            { "name": "H6", "price": 75000, "booked": false ,color:sus },
            { "name": "H7", "price": 75000, "booked": false ,color:sus },
            { "name": "H8", "price": 75000, "booked": false ,color:sus },
            { "name": "H9", "price": 75000, "booked": false ,color:sus },
            { "name": "H10", "price": 75000, "booked": false ,color:sus },
            { "name": "H11", "price": 75000, "booked": false ,color:sus },
            { "name": "H12", "price": 75000, "booked": false ,color:sus }
          ]
        },
        {
          "row": "I",
          "seats": [
            { "name": "I1", "price": 75000, "booked": false ,color:sus },
            { "name": "I2", "price": 75000, "booked": false ,color:sus },
            { "name": "I3", "price": 75000, "booked": false ,color:sus },
            { "name": "I4", "price": 75000, "booked": false ,color:sus },
            { "name": "I5", "price": 75000, "booked": false ,color:sus },
            { "name": "I6", "price": 75000, "booked": false ,color:sus },
            { "name": "I7", "price": 75000, "booked": false ,color:sus },
            { "name": "I8", "price": 75000, "booked": false ,color:sus },
            { "name": "I9", "price": 75000, "booked": false ,color:sus },
            { "name": "I10", "price": 75000, "booked": false ,color:sus },
            { "name": "I11", "price": 75000, "booked": false ,color:sus },
            { "name": "I12", "price": 75000, "booked": false ,color:sus }
          ]
        },
        {
          "row": "J",
          "seats": [
            { "name": "J1", "price": 75000, "booked": false ,color:sus },
            { "name": "J2", "price": 75000, "booked": false ,color:sus },
            { "name": "J3", "price": 75000, "booked": false ,color:sus },
            { "name": "J4", "price": 75000, "booked": false ,color:sus },
            { "name": "J5", "price": 75000, "booked": false ,color:sus },
            { "name": "J6", "price": 75000, "booked": false ,color:sus },
            { "name": "J7", "price": 75000, "booked": false ,color:sus },
            { "name": "J8", "price": 75000, "booked": false ,color:sus },
            { "name": "J9", "price": 75000, "booked": false ,color:sus },
            { "name": "J10", "price": 75000, "booked": false ,color:sus },
            { "name": "J11", "price": 75000, "booked": false ,color:sus },
            { "name": "J12", "price": 75000, "booked": false ,color:sus }
          ]
        }
      ],
     
      carts:[],
      carts2:[]
}
const movieReducer = (state = initialState,action)=>{
  switch (action.type) {
   case "addTocart":{
   
    const index = state.carts.findIndex(
      (item) => item.name === action.seat.name
    );

    // THÊM MỚI VÀO GIỎ HÀNG VÀ SET QUANTITY LÀ 1
    if (index === -1) {
      // Nếu giá trị bên trong object state là một array/object, ta cần tiếp tục tạo ra một array/object mới trước khi gán lại cho state
      const newCarts = [...state.carts, { ...action.seat}];
      return { ...state, carts: newCarts,carts2:newCarts };
    }
   }
   
    case "removeCart":{
      const newCarts = state.carts.filter((item)=>{
        return item.name !== action.cartName
      })
      return { ...state, carts: newCarts,carts2:newCarts };
    }
    case "finish":{
      const cloneTickets = [...state.tickets]
      // console.log (cloneTickets)
      for (var i =0 ; i < state.carts2.length;i++){
        const index = cloneTickets.findIndex((item)=>
           item.row === state.carts2[i].name.substr(0,1)
        )
        const indexFound = cloneTickets[index].seats.findIndex((seat)=>{
          return seat.name === state.carts2[i].name
        })
        cloneTickets[index].seats[indexFound].booked = true
        console.log("run",cloneTickets[index].seats[indexFound].booked)
      }
      const newCartz = []
      return {...state,tickets:cloneTickets,carts:newCartz}
      


     
    }
    default:
     return state
  }
}
export default movieReducer