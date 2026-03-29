// Enter rafce
//parent of App.jsx is main.jsx
// grandParent of App.jsx is index.html.

import React from 'react'

// 1. React must return a single parent element, here single parent element is <div></div>
// const App = () => {
//   return (
//     <div id="parent">
//       <h1>App</h1>
//       <h3>Hello</h3>
//     </div>
//   )
// }

// export default App



// 2. React must return a single parent element, so wrap multiple elements in a div or Fragment

//option: 1 ( Wrap inside <div> )

// Define a functional component named App
// const App = () => {
//   return (
//     // Single parent div
//     <div>
//       {/* JSX: UI structure */}
//       <div id="dad">
//         <h1>App</h1>
//         <h3>Hello</h3>
//       </div>

//       {/* Additional element */}
//       <div id="chacha">
//         <h1>123</h1>
//       </div>

//     </div>
//   )
// }
// export default App

// {} in JSX is used to write JavaScript expressions (variables, functions, conditions, etc.)




//option:2  ( Use Fragment )
// Define a functional component named App
const App = () => {
  return (
    <>
      {/* First block */}
      <div>
        <h1>App</h1>
        <h3>Hello</h3>
      </div>

      {/* Second element */}
      <div id="chacha">
        <h1>123</h1>
      </div>
      
    </>
  )
}
export default App


// function App() {
//   return <h1>yoooo hiiii!!!!! </h1>
// }

// export default App
