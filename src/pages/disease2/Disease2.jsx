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
import { setAccessToken, getAccessToken } from "../../config/LocalStorage";
import "./Disease2.scss";
const { Step } = Steps;
const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Third",
    content: "Third-content",
  },
  {
    title: "Fourth",
    content: "Fourth-content",
  },
  {
    title: "Fifth",
    content: "Last-content",
  },
];
class Disease2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  navigateDisease2 = () => {
    this.props.history.push(RoutesConstant.disease3);
  };

  render() {
    const { form, errors, loading, current, data } = this.state;
    return (
      <>
        <LayoutHeader />
        <$Row style={{ marginTop: "100px", marginLeft: "5%" }}>
          <h1>Hello {(data.gender === "male" ? "Mr " : "Miss ") + data.name}</h1>
        </$Row>
        <$Col style={{ padding: "2%" }}>
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => this.next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => this.navigateDisease2()}
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
        <LayoutFooter />
      </>
    );
  }
}

export default Disease2;
