import React, { Component } from "react";
import cake from "./image1.jpg";
import cake1 from "./Sample-Audio-video/im2.gif";

class Images extends Component {
  render() {
    return (
      <div>
        <h2>This is image Component</h2>
        {/* <img src={cake}/> */}
        <img src={cake1} />
      </div>
    );
  }
}
export default Images;
