import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      photos : []
    }
  }

  componentDidMount(){
    var req = require.context('./ratan', false,  /\.(png|gif|ico|jpg|jpeg|JPG|JPEG)$/);
    let _this = this;
    console.log(req);
    let arr = [];
    req.keys().forEach(function(key) {
      let name = key.replace("./", "");
      arr.push(name);
      _this.setState({
        photos : arr
      });
    });
  }

  render() {
  var picArr = this.state.photos;
  console.log(typeof(picArr));
  return (
  <div className="container-fluid">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
               <li data-target="#myCarousel" data-slide-to="3"></li>
           </ol>
        {
        picArr.map((object,i) => {
          var path = 'ratan/'+object;
          console.log(path);
          return(
            <div className="carousel-inner" role="listbox">
                <div className="item">
                    <img src={path}  alt="bro" width="400" height="400" role="listbox"/>
                    <div className="carousel-caption">
                        <h3>Sandeep</h3>
                      <p>pic is taken by someone</p>
                    </div>
                </div>
            </div>
          );
        })

        }
      </div>
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel"role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
       <span className="sr-only">Next</span>
        </a>
</div>
    );
  }
}

export default App;

