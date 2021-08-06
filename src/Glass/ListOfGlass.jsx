import React, { Component } from "react";
import { listGlasses } from "./listGlasses";

export default class ListOfGlass extends Component {
  state = {
    url: "./image/v1.png",
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };

  changeGlass = (url) => {
    const findGlasses = listGlasses.find((item) => item.url === url);
    // console.log(findGlasses);
    this.setState({
      url: findGlasses.url,
      name: findGlasses.name,
      desc: findGlasses.desc,
    });
  };

  render() {
    const { url, name, desc } = this.state;
    return (
      <div class="container mt-5">
        <div class="row">
          <div class="col col-lg-2"></div>
          <div class="col-md-auto">
            <div class="row justify-content-center">
              <div class="col-4 wearGlass">
                <img src="./image/model.jpg" className="model" alt="" />
                <img src={url} className="choiceGlass" alt="" />
                <div id="rectangle">
                  <h3>{name}</h3>
                  <p>{desc}</p>
                </div>
              </div>
              <div class="col-4"></div>
              <div class="col-4">
                <img src="./image/model.jpg" className="model" alt="" />
              </div>
            </div>
          </div>
          <div class="col col-lg-2"></div>
        </div>

        <div class="row justify-content-center">
          <div className="col mt-5 d-flex justify-content-center">
            <div className="card-deck p-5 ">
              <div
                className="card"
                onClick={() => this.changeGlass("./image/v1.png")}
              >
                <img
                  src="./image/v1.png"
                  className="card-img-top w-100"
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() => this.changeGlass("./image/v2.png")}
              >
                <img
                  src="./image/v2.png"
                  className="card-img-top w-100"
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() => this.changeGlass("./image/v3.png")}
              >
                <img
                  src="./image/v3.png"
                  className="card-img-top w-100"
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() => this.changeGlass("./image/v4.png")}
              >
                <img
                  src="./image/v4.png"
                  className="card-img-top w-100"
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() => this.changeGlass("./image/v5.png")}
              >
                <img
                  src="./image/v5.png"
                  className="card-img-top w-100"
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() => this.changeGlass("./image/v6.png")}
              >
                <img
                  src="./image/v6.png"
                  className="card-img-top w-100"
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() => this.changeGlass("./image/v7.png")}
              >
                <img
                  src="./image/v7.png"
                  className="card-img-top w-100"
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() => this.changeGlass("./image/v8.png")}
              >
                <img
                  src="./image/v8.png"
                  className="card-img-top w-100"
                  alt=""
                />
              </div>
              <div
                className="card"
                onClick={() => this.changeGlass("./image/v9.png")}
              >
                <img src="./image/v9.png" className="card-img-top" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
