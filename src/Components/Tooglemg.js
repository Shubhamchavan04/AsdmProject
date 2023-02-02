import React, { Component } from "react";

class Tooglemg extends Component {
  isCond = true;

  constructor(props) {
    super(props);

    this.state = {
      //  imgPath : imgObj.boy,
      //  imgName:"BoY",
    };
  }
  // changeImg = () => {
  //     this.isCond=!this.isCond;
  //     if (this.iscond) {
  //         this.setState({imgPath:imgObj.boy,imgName:"Boy"});
  //     } else {
  //         this.setState({imgPath:imgObj.cake2,imgName:"cake-2"})
  //     }
  // }

  // render is a menthod and method is execute when it get call .... but here render is static method so ot get called automatically

  render() {
    // const { imgPath, ImgName } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <h2>This is ToogleImg Component</h2>
        {/* <img src="{imgObj.boy}" style={{height:"200px", width:"200px"}}> */}
        <br />
        {/* <strong>{imgName}y</strong> <br /> */}
        <button type="button" onClick={this.changeImg}>
          Change Image
        </button>
      </div>
    );
  }
}

export default Tooglemg;
