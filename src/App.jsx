import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchParams from './SearchParams';
// import Pet from './Pet';

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h1", {}, props.animal),
//     React.createElement("h1", {}, props.breed),
//   ]);
// };

// data flow in one side direction form parent to child that is App to pet
// this one side data flow helps in debugging as we know pet cannot pass data
// data came from app so we can debug our

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt-Me"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "dog",
//       breed: "dashund",
//     }),
//     React.createElement(Pet, {
//       name: "Lucy",
//       animal: "cat",
//       breed: "stray",
//     }),
//     React.createElement(Pet, {
//       name: "Rajath",
//       animal: "human",
//       breed: "human",
//     }),
//   ]);
// };

const App = () => {

  return (
    <div>
       <h1>Adopt-me</h1>
      <SearchParams></SearchParams>
      {/*<Pet name ="Luna" animal="Dog" breed="Dashund"/>
      <Pet name ="max" animal="Bird" breed="Beagle"/>
      <Pet name ="Kasa" animal="Rajath" breed="Human"/> */}
      
    </div>
  )
  
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));
root.render(<App/>)
