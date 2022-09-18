import React, { Component } from "react";
import {
  $Message,
  $FormHeader,
  $Row,
  $Col,
  $Button,
} from "../../components/antd";
import { Carousel } from "antd";
import welcome from "../../assets/images/welcome.jpg";
import { LayoutHeader } from "../../components/layouts/dashBoard/header";
import { LayoutFooter } from "../../components/layouts/dashBoard/footer";
import { RoutesConstant } from "../../assets/constants";
const contentStyle = {
  marginTop: "1%",
  width: "100%",
  height: "450px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const bodyStyle = {
  height: "50vh",
};

class Home extends Component {
  onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  navigateSpread=()=>{
    this.props.history.push(RoutesConstant.disease11);
  }
  
  navigateDisease1=()=>{
    this.props.history.push(RoutesConstant.disease1);
  }

  render() {
    return (
      <div>
        <LayoutHeader />
        <Carousel afterChange={this.onChange}>
          <div>
            <img style={contentStyle} src={welcome} />
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <div style={bodyStyle}>
          <$Row style={{ paddingLeft: "5%" }}>
            <h2>Click here to view</h2>
          </$Row>
          <$Row style={{ justifyContent: "center" }}>
            <$Col xl={5}>
              <$Button style={{ width: "200px", height: "70px" }} onClick={this.navigateSpread}>
                Spread Rate
              </$Button>
            </$Col>
            <$Col xl={5}>
              <$Button style={{ width: "200px", height: "70px" }} onClick={this.navigateDisease1}>
                Disease Identification
              </$Button>
            </$Col>
          </$Row>
        </div>
        <LayoutFooter />
      </div>
    );
  }
}

export default Home;
