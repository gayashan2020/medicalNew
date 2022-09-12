import React, { Component } from "react";
import {
  $Message,
  $FormHeader,
  $Row,
  $Col,
  $Button,
  $Input,
} from "../../components/antd";
import { Button, message, Steps } from "antd";
import welcome from "../../assets/images/welcome.jpg";
import { LayoutHeader } from "../../components/layouts/dashBoard/header";
import { LayoutFooter } from "../../components/layouts/dashBoard/footer";
import { RoutesConstant } from "../../assets/constants";
import {
  setAccessToken,
  getAccessToken,
  setData,
} from "../../config/LocalStorage";
import "./Disease4.scss";
const { Step } = Steps;

const steps = [
  {
    title: "Temperature",
    content: "Temperature",
  },
  {
    title: "pulse",
    content: "pulse",
  },
  {
    title: "oxygen",
    content: "oxygen",
  },
];
class Disease4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        Temperature: 41,
        pulse: 74,
        oxygen: 25,
        spo2: 50,
      },

      current: 0,
      data: [],

      errors: {},
      loading: false,
    };
  }

  componentDidMount = async () => {
    let data = getAccessToken();
    this.setState({
      data: JSON.parse(data),
    });
  };

  next = () => {
    let current = this.state.current;
    this.setState({
      current: current + 1,
    });
  };

  prev = () => {
    let current = this.state.current;
    this.setState({
      current: current - 1,
    });
  };

  navigateDisease4 = () => {
    this.props.history.push(RoutesConstant.spreadRate);
  };

  onHandleChange = (name, value) => {
    console.log(name, value);
    const form = { ...this.state.form };
    form[name] = value;
    this.setState({ form });
  };

  navigateDisease10 = () => {
    this.props.history.push(RoutesConstant.disease10);
  };

  navigateDisease6 = () => {
    this.props.history.push(RoutesConstant.disease6);
  };

  navigateDisease7 = () => {
    this.props.history.push(RoutesConstant.disease7);
  };

  navigateDisease8 = () => {
    this.props.history.push(RoutesConstant.disease8);
  };

  navigateDisease9 = () => {
    this.props.history.push(RoutesConstant.disease9);
  };

  navigateDisease10 = () => {
    this.props.history.push(RoutesConstant.disease10);
  };

  render() {
    const { form, errors, loading, current, data } = this.state;
    return (
      <>
        <LayoutHeader />
        <$Row style={{ marginTop: "100px", marginLeft: "5%" }}>
          <h1>Getting patient details</h1>
        </$Row>
        <$Row
          style={{ margin: "3%" }}
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <$Col className="gutter-row" span={6}>
            <div className="card" onClick={() => this.navigateDisease10()}>
              Covid
            </div>
            <div className="card2">Covid</div>
          </$Col>
          <$Col className="gutter-row" span={6}>
            <div className="card" onClick={() => this.navigateDisease6()}>
              Pneumonia
            </div>
            <div className="card2">Pneumonia</div>
          </$Col>
          <$Col className="gutter-row" span={6}>
            <div className="card" onClick={() => this.navigateDisease8()}>
              Heart Attack
            </div>
            <div className="card2">Heart Attack</div>
          </$Col>
          <$Col className="gutter-row" span={6}>
            <div className="card" onClick={() => this.navigateDisease7()}>
              Wheezing
            </div>
            <div className="card2">Wheezing</div>
          </$Col>
          <$Col className="gutter-row" span={6}>
            <div className="card" onClick={() => this.navigateDisease9()}>X-ray</div>
            <div className="card2">X-ray</div>
          </$Col>
        </$Row>
        <LayoutFooter />
      </>
    );
  }
}

export default Disease4;
