import React , {Component} from 'react';
import styled from 'styled-components';
import './BodyCard.css';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";
import './Colaboration.css';
import './Slick.css';
import Carousel from 'react-bootstrap/Carousel';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class Home extends Component {
  render() {
    var images = [    
      { img: 'assets/c1.jpg' },    
      { img: 'assets/c2.png' },    
      { img: 'assets/c3.jpg' },    
      { img: 'assets/c4.jpg' },    
      { img: 'assets/c5.jpg' },    
      { img: 'assets/c6.png' },
      { img: 'assets/c7.png' },
      { img: 'assets/c8.jpg' },
      { img: 'assets/c9.jpg' },
      { img: 'assets/c10.jpg' },    
    ];
    var imgSlides = () =>  
        images.map(num => (
        <div className="colab-box">
            <div className="imgpad">  
                <img className="imgdetails" src= {num.img} width="100%" alt=""/>    
            </div>  
        </div>

        ));
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 5,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 3  
          };
      return (
        <div>
          <div className="header">
            <h1>
             <strong className="heading">Vyntra Mart</strong>
              <h6 class="text-muted"> We Know Fashion</h6>
               </h1>
          </div>
            <Slider {...settings} >  
              <div className="wdt">  
              <img  className="img" src= {'assets/a1.jpg'} alt=""/>  
              </div>  
              <div className="wdt">  
              <img src= {'assets/a2.jpg'} className="img" alt=""/>  
              </div>  
              <div className="wdt">  
              <img className="img" src= {'assets/a3.jpg'} alt=""/>  
              </div> 
            </Slider>
          <div className="row box">
              <div className="col-lg-3">
              <div class="card card-box" style={{width: "20rem", textAlign: "left",}}>
              <img class="card-img-top" src="assets/p1.jpg" alt="Cardcap" style={{width: "200px",height: "200px"}}/>
                  <div class="card-block">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-dark">Add to Cart</a>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div class="card card-box" style={{width: "20rem",textAlign: "left",}}>
              <img class="card-img-top" src="assets/p2.jpg" alt="Cardcap" style={{width: "200px",height: "200px",}} />
                  <div class="card-block">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-dark">Add to Cart</a>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div class="card card-box" style={{width: "20rem", textAlign: "left",}}>
              <img class="card-img-top" src="assets/p3.jpg" alt="Cardcap" style={{width: "200px",height: "200px",}} />
                  <div class="card-block">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-dark">Add to Cart</a>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div class="card card-box" style={{width: "20rem", textAlign: "left",}}>
              <img class="card-img-top" src="assets/p4.jpg" alt="Cardcap" style={{width: "200px",height: "200px",}} />
                  <div class="card-block">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-dark">Add to Cart</a>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div class="card card-box" style={{width: "20rem", textAlign: "left",}}>
              <img class="card-img-top" src="assets/p5.jpg" alt="Cardcap" style={{width: "200px",height: "200px",}} />
                  <div class="card-block">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-dark">Add to Cart</a>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div class="card card-box" style={{width: "20rem", textAlign: "left",}}>
              <img class="card-img-top" src="assets/p6.jpg" alt="Cardcap" style={{width: "200px",height: "200px",}} />
                  <div class="card-block">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-dark">Add to Cart</a>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div class="card card-box" style={{width: "20rem", textAlign: "left",}}>
              <img class="card-img-top" src="assets/p7.jpg" alt="Cardcap" style={{width: "200px",height: "200px",}} />
                  <div class="card-block">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-dark">Add to Cart</a>
                  </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div class="card card-box" style={{width: "20rem", textAlign: "left",}}>
              <img class="card-img-top" src="assets/p8.jpg" alt="Cardcap" style={{width: "200px",height: "200px",}} />
                  <div class="card-block">
                      <h4 class="card-title">Card title</h4>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-dark">Add to Cart</a>
                  </div>
              </div>
              </div>
          </div>
          <div className="App"> 
          <Slider  
            dots={true}  
            slidesToShow={3}  
            slidesToScroll={3}  
            autoplay={false}  
            arrows={true}  
            autoplaySpeed={3000}>{imgSlides()}
          </Slider>
          </div>
          <div class="cor-box">
          <Carousel slide="true" interval="2000">
                <Carousel.Item>
                  <img
                    className="d-block w-100 imgattr"
                    src="assets/cor1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Fashion Is My Life.</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 imgattr"
                    src="assets/cor2.jpg"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 imgattr"
                    src="assets/cor3.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
          </div>
          <div>


          </div>
          </div>
      );
  }
}

export default Home