import React from 'react';
import Details from './Details';
import { BrowserRouter, Routes,Route ,Link} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import SearchParams from './SearchParams';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
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
const queryClient = new QueryClient({
  defaultOptions:{
    queries :{
      staleTime: Infinity,
      cacheTime:Infinity,
      refetchOnMount:false
    }
  }
});
const App = () => {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>

       <header >
        <Link to="/">
        
          Adopt-me
        </Link>
        </header>
       <Routes>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path='/' element={<SearchParams/>}></Route>

       </Routes>
      {/* <SearchParams/> */}
      {/*<Pet name ="Luna" animal="Dog" breed="Dashund"/>
      <Pet name ="max" animal="Bird" breed="Beagle"/>
    <Pet name ="Kasa" animal="Rajath" breed="Human"/> */}
      
    
    </QueryClientProvider>
    </BrowserRouter>
  )
  
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));
root.render(<App/>)
