import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter,faWhatsapp, faGithub, faPinterest, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";

<script src="https://kit.fontawesome.com/e09742a157.js" crossorigin="anonymous"></script>
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
  const onSearchNameChangeHandler=(event)=>{
    console.log("Value of search is :", event.target.value);
  }
  return(
    <>
    <input onChange={onSearchNameChangeHandler} placeholder='Search a book'/>
      <Header/>
      <Body/>
      <Footer/>
      </>
  )
}
const Header=()=>{
  return (
    <div>
       <ul class="menu cf">
<li><a href="">Home</a></li>
<li>
        <a href="">Services</a>
        <ul class="submenu">
<li><a href="">Web design</a></li>
<li><a href="">Graphics design</a></li>
</ul>
</li>
<li><a href="">Blog</a>
<ul class="submenu">
<li><a href="">News</a></li>
<li><a href="">What we do</a></li>
</ul>
</li>
<li><a href="">About us</a>
<ul class="submenu">
<li><a href="">Location</a></li>
<li><a href="">Background</a></li>
</ul>
</li>
<li><a href="">Contact us</a>
<ul class="submenu">
<li><a href="">Offline</a></li>
<li><a href="">Online</a></li>
</ul>
</li>
</ul>
    </div>
  )
}
const Body=()=>{
  return(
    <div className='bet'>
      <h1>
        Books by Ben Carson you might like</h1>
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
      <Book4/>
      <Book5/>
      <Book6/>
      <Book7/>
      <Book8/>
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
    const greet=()=>{
      console.log('All these books were authoured by Ben Carson');
    }
    return(
      <div id='book'>
        <img src='https://th.bing.com/th/id/R.ff9ac0565ef1a4c18938fead19910f90?rik=Lu1YlOa0dBb5Vg&pid=ImgRaw&r=0'/>
        <h3>One Nation</h3>
        <button onClick={greet}>I can only be consologged</button>

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
  const Book4=()=>{
    const greet=()=>{
      alert('All these books were authoured by Ben Carson');
    }
    return(
      <div id='book'>
        <img src='https://globalbookclub.s3.amazonaws.com/resources/2980599/gifted_hands_revised_kids_edition_the_ben_carson_story/cover.jpg'/>
        <h3>Gifted Hands</h3>
        <button onClick={greet}>Click me</button>

      </div>
    )
  }
  const Book5=()=>{
    return(
      <div id='book'>
        <img src='https://kibangabooks.com/wp-content/uploads/2021/07/F9AD9E6D-03CF-45D6-B826-EF2DA224F7C8-600x600.jpeg'/>
        <h3>Take the Risk</h3>
      </div>
    )
  }
  const Book6=()=>{
    return(
      <div id='book'>
        <img src='https://static1.koorong.com/images/p/17/cap/d-a/9780310749455_1316162@2x.jpg'/>
        <h3>You have a Brain</h3>
      </div>
    )
  }
  const Book7=()=>{
    return(
      <div id='book'>
        <img src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/745afb8b-0957-4c00-a03f-98ce36386ce8.__CR174,115,1153,1153_PT0_SX300_V1___.png'/>
        <h3>Created Equal</h3>
      </div>
    )
  }
  
  const Book8=()=>{
    
    return(
      <div id='book'>
        <img src='https://s1.nyt.com/du/books/images/9780310330714.jpg'/>
        <h3>America the Beautiful</h3>
      </div>
    )
  }
  


  const Footer=()=>{
    return(
      
      <div className='Foot'>
        <footer id='foots'>
        <div className='icons'>
        < FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        < FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        < FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
        < FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        < FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
        < FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
        < FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </div>
        <div className='social'>
          <h3>Social sites</h3>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Whattsapp</li>
          <li>Github</li>
          <li>Pinterest</li>
          <li>Tiktok</li>
          <li>Instagram</li>
        </div>
        <div className='services'>
          <h3>Services</h3>
          <li>Graphic designing</li>
          <li>Web development</li>
          <li>Web designing</li>
          <li>Content Creation</li>
          <li>Video editing</li>
          <li>App development</li>
          <li>Marketing</li>
        </div>
        <div className='booki'>
          <h3>Our Books</h3>
          <li>Think Big</li>
          <li>One Nation</li>
          <li>What I Believe</li>
          <li>Gifted Hands</li>
          <li>Take the risk</li>
          <li>You have a Brain</li>
          <li>Created Equal</li>
          </div>
          <div className='email'>
            <h3>Send us an E-mail</h3>
          <p><a href="mailto:charzlwebz256@gmail.com">charzlwebz256@gmail.com</a></p>
          </div>
        </footer>
        
      </div>
    )
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)