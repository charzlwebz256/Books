import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
/*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
const App=()=>{
  return(
    <>
      <Header/>
      <Body/>
      <Footer/>
      </>
  )
}
const Header=()=>{
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
const Body=()=>{
  return(
    <div>
      <h1>
        Books you might like</h1>
        <Books/>

    </div>
  )
}
const Books=()=>{
  return(
    <div className='books'>
      <Book1/>
      <Book2/>
      <Book3/>
      </div>
  )
  }
  const Book1=()=>{
    return(
      <div id='book'>
        <img src='https://th.bing.com/th/id/R.cdf630362dd51475a57478f6e00fd3d3?rik=4vL%2fehoUbJt14g&riu=http%3a%2f%2fchristianaudio.com%2fmedia%2fcatalog%2fproduct%2fcache%2f1%2fimage%2f9df78eab33525d08d6e5fb8d27136e95%2ft%2fh%2fthink_big_zondervan_large.jpg&ehk=EL81K5Bqq0%2fW6aU6XHmV8St56EKbq6pDMPsTU5jWcVs%3d&risl=&pid=ImgRaw&r=0'/>
        <h3>Think Big</h3>
      </div>
    )
  }
  const Book2=()=>{
    return(
      <div id='book'>
        <img src='https://th.bing.com/th/id/R.ff9ac0565ef1a4c18938fead19910f90?rik=Lu1YlOa0dBb5Vg&pid=ImgRaw&r=0'/>
        <h3>One Nation</h3>
      </div>
    )
  }
  const Book3=()=>{
    return(
      <div id='book'>
        <img src=' https://th.bing.com/th/id/R.3cd069166a62aa085b6d91e7cebf621a?rik=o3JYelsONkwT4A&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f2940151590655_p0_v1_s1200x630.jpg&ehk=a2pHvedNtsLpB0moCnCFn1GhCZQnIw3svb0PUbQH02A%3d&risl=&pid=ImgRaw&r=0'/>
        <h3>What I Believe</h3>
      </div>
    )
  }
  const Footer=()=>{
    return(
      <div>
        <h1>Footer</h1>
      </div>
    )
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)