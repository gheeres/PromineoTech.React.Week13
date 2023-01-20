import React from 'react';
import Profile from './components/Profile';
import './App.css';

export default class App extends React.Component {
  render() {
    console.log("App.render()");
    
    return (
      <section className="profile vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <Profile name="George Heeres" avatar="ava4-bg.webp" />
            </div>
            <div className="col-md-12 col-xl-4">
              <Profile name="Andrew Smith" avatar="ava3-bg.webp" />
            </div>
            <div className="col-md-12 col-xl-4">
              <Profile name="Jack George" avatar="ava2-bg.webp" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//export default App;