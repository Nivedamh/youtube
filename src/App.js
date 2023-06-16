
//import './App.css';// when it is in same folder give./and file name if it is in different folder ../filename
//import Navbar from './components/navbar'
//import Home from './components/home';
//   import Events from './components/events';                    
// function App(){
//     return (
//         <div className="App">
//             <Events/>
//         </div>
//     );
// }
// export default App; 


//hooks
// import'./App.css';
// import Videos from './components/videos';


// function App(){
//        return (
//             <div className="App">
//  <Videos/>

// </div>
//    );
//    }
//     export default App; 


import './App.css';
import Navbar from './components/navbar'
import Home from './components/home';
import AddVideo from './components/addvideo';
import PageNotFound from './components/pageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<AddVideo />} path='/add-video' />
          <Route element={<PageNotFound />} path='*' /> 
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;