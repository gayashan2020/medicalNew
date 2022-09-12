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
import { setAccessToken, getAccessToken, setData } from "../../config/LocalStorage";
import "./Disease5.scss";
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
class Disease5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        Temperature: 51,
        pulse: 75,
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

  navigateDisease5 = () => {
    this.props.history.push(RoutesConstant.spreadRate);
  };

  onHandleChange = (name, value) => {
    console.log(name, value);
    const form = { ...this.state.form };
    form[name] = value;
    this.setState({ form });
  };

  submit = async () => {
    const form = { ...this.state.form };
    const Temperature = form.Temperature;
    const pulse = form.pulse;
    const oxygen = form.oxygen;
    const spo2 = form.spo2;

    const data = {
      Temperature: Temperature,
      pulse: pulse,
      oxygen: oxygen,
      spo2: spo2,
    };
    this.setState({ loading: true });
    setData(JSON.stringify(data));
    this.props.history.push(RoutesConstant.disease2);
    this.setState({ loading: false });
  };

  render() {
    const { form, errors, loading, current, data } = this.state;
    return (
      <>
        <LayoutHeader />
        <$Row style={{ marginTop: "100px", marginLeft: "5%" }}>
          <h1>Getting patient details</h1>
        </$Row>
        <$Row>
          <$Col xl={12} style={{ padding: "2%" }}>
            <$Row style={{ marginBottom: "10px" }}>
              <div>
                <h5>{steps[current].title}</h5>
              </div>
            </$Row>
            <$Row>
              <$Col xl={4}>
                <h5>Value</h5>
              </$Col>
              <$Col xl={12}>
                {steps[current].title === "Temperature" && (
                  <$Input
                    name="Temperature"
                    handleChange={this.onHandleChange}
                    value={form.Temperature}
                  />
                )}
                {steps[current].title === "pulse" && (
                  <$Input
                    name="pulse"
                    handleChange={this.onHandleChange}
                    value={form.pulse}
                  />
                )}
                {steps[current].title === "oxygen" && (
                  <$Input
                    name="oxygen"
                    handleChange={this.onHandleChange}
                    value={form.oxygen}
                  />
                )}
              </$Col>
            </$Row>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => this.next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button
                  style={{
                    margin: "0 8px",
                  }}
                  onClick={() => this.prev()}
                >
                  Previous
                </Button>
              )}
            </div>
          </$Col>
          <$Col xl={12} className="bg-image"></$Col>
        </$Row>
        <LayoutFooter />
      </>
    );
  }
}

export default Disease5;
