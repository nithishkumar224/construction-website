
import './App.css';
import crush from './images/crush.jpg';
import bricks from './images/brick.png';
import cement from './images/cement.png';
import pipes from './images/pipe.png';
import sand from './images/sand.jpg';
import wires from './images/wires.jpg';
import logo from './images/logo.jpeg';



function App() {
  return (
    <div className="App">
           <div className="main">
            <div className="navbar">
                <img src={logo} />
                <ul>
                    <li><a href="home.html">PRODUCTS</a></li>
                    <li><a href="about.html">ABOUT US</a></li>
                    <li><a href="sevices.html">SERVICES</a></li>
                    <li><a href="gallery.html">GALLERY</a></li>
                    <li><a href="contact.html">GET IN TOUCH</a></li>
                </ul>
            </div>
            <div className="content">
                <h1>We convert your dreams into reality.</h1>
                <p>We are dedicated to quality and Excellence in <br />Building construction.<br /></p>
                <div><br />
                <a href="" className="button">vist us to know more</a>
                    
                </div>
            </div>
        </div>
        <div className="new">
            <h1>We provide fast and affordable service for your projects.Hire us!</h1>
            <p>Products we offer</p>
        </div>
        <div class="row" >
            <div className="offer">
                <img src={bricks} height="200px" />
                <a href="bricks.html" className="click">Bricks</a>
            </div>
            <div className="offer">
                <img src={cement} height="200px" />
                <a href="" className="click">Cement</a>
            </div>
            <div className="offer">
                <img src={pipes}height="200px" />
                <a href="" className="click">Pipes</a>
            </div>
        </div>
        <div className="secondrow" >
            <div class="offer">
                <img src={wires} height="200px" />
                <a href="" className="click">Wires</a>
            </div>
            <div className="offer">
                <img src={crush} height="200px" />
                <a href="" class="click">Crushedstones</a>
            </div>
            <div class="offer">
                <img src={sand} height="200px" />
                <a href="" class="click">Sand</a>
            </div>
        </div>
        <div class="pay">
            <br/><h1>Place your orders</h1>
        </div>
		
    </div>
  );
}

export default App;
