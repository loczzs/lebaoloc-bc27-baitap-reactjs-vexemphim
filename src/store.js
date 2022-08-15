// File dùng để cấu hình redux
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer,";

// Tạo ra redux store để lưu trữ state
// configureStore đã bao gồm cấu hình thư viện redux-thunk cho phép viết các async actions
const store = configureStore({
  reducer: {
    movies: movieReducer
  },
});
// console.log(store)

// ================================================================================
// // store.getState(): là hàm dùng để truy cập vào state của redux store
// console.log("Default state:", store.getState());

// // store.subscribe(): là hàm dùng để lắng nghe sự thay đổi của state trong redux store, khi state thay đổi, callback bên trong hàm subscribe sẽ được gọi tới.
// store.subscribe(() => console.log("State changes", store.getState()));

// // Không được quyền thay đổi trực tiếp state
// // store.getState().count = 20 // state thay đổi nhưng không chạy vào callback của hàm subscribe

// // Để thay đổi state của redux store ta cần thông qua 1 action
// // action bản chất là 1 object có 1 thuộc tính bắt buộc là type, dùng để mô tả cho redux store biết sẽ thay đổi state như thế nào
// store.dispatch({ type: "increase" }); // state count + 1
// store.dispatch({ type: "increaseByAmount", amount: 10 }); // state count + 10
// ================================================================================

export default store;
