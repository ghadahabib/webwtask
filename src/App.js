import React, {Fragment } from 'react';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import Navigation from './component/Navbar/Navbar';
import Index from './component/Index';
import Footer from './component/Footer/Footer';
import './style.scss';

const App = () => {
  return (
    <Fragment>
        <Navigation/>
        <Index></Index>
        <Footer></Footer>
    </Fragment>
    
  );
}

export default App;
