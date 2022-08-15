import React from "react";

import Movie from "./MovieRe/Movie";

// Component: một function return về JSX mô tả những gì sẽ được hiển thị trên giao diện
function App() {
  // JSX: Javascript XML
  // JSX là một cú pháp đặc biệt cho phép viết HTML bên trong javascript
  // Bởi vì JSX gần với JS hơn là với HTML, nên các property/attribute của thẻ HTML ta cần chuyển thành camelCase
  // VD: class -> className, for -> htmlFor, tabindex -> tabIndex
  // return (
  //   <div className="App">
  //     <h1>Hello Reactjs</h1>
  //   </div>
  // );
  // Bản chất đoạn code JSX trên sẽ được transform về JS thuần như sau
  // return React.createElement(
  //   "div", { className: "App" },
  //   React.createElement("h1", null, "Hello Reactjs")
  // );

  return (
    // 1. Components
    // <div className="text-center text-primary">
    //   <h1>App</h1>
    //   <HelloWorld />
    //   <Greeting />
    // </div>
    // <Home />
    // <Msi />

    // 2. Data Binding
    // <DataBinding />

    // 3. Event
    // <Event />

    // 4. State
    // <State />
    // <SelectCar />

    // 5. Conditional rendering
    // <ConditionalRendering />

    // 6. Map
    // <Map />
    // <Movie />

    // 7. Props
    // <Props />
    // <ShoesShop />

    // Bài tập tổng hợp State, Props
    // <ShoppingCart />

    // 8. Lifecycle
    // <Lifecycle />

    // Bài tập tổng hợp State, Props, Lifecycle
    // <ProductManagement />

    // 9. Composition
    // <Composition />

    // 10. Hooks
    // <Hooks />

    // Bài tập Hooks
    // <UserManagement />

    // 11. Refs
    // <Refs />

    // 12. Style
    // <Style />

    // 13. Styled Component (css-in-js)
    // <StyledComponent />

    // 14. Custom hooks
    // <CustomHooks />

    // 15. Redux
    // <Redux />

    // Bài tập Shopping Cart Redux
    // <ShoppingCartRedux />

    // Bài tập TodoApp Redux
    // <TodoAppRedux />
    <Movie />
  );
}

export default App;
