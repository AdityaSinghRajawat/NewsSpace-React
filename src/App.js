import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { Route, RouterProvider, Routes, createBrowserRouter, } from "react-router-dom";

const router = createBrowserRouter([
  // { path: "/", Component: NavBar },
  // { path: "/", Component: News },
  { path: "*", Component: Root },
]);

const App = () => {
  return <RouterProvider router={router} />;
}


function Root() {
  let pagesize = 9;
  let apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);



  return (
    <div>
      <NavBar />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />

      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country="in" category="general" />} />
        <Route key="general" path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pagesize} country='in' category='general' />}></Route>
        <Route key="business" path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pagesize} country='in' category='business' />}></Route>
        <Route key="entertainment" path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pagesize} country='in' category='entertainment' />}></Route>
        <Route key="health" path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pagesize} country='in' category='health' />}></Route>
        <Route key="science" path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pagesize} country='in' category='science' />}></Route>
        <Route key="sports" path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pagesize} country='in' category='sports' />}></Route>
        <Route key="technology" path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pagesize} country='in' category='technology' />}></Route>
      </Routes>

    </div>
  )
}

export default App