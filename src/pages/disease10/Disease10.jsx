import React, { Component } from "react";
import {
  $Message,
  $FormHeader,
  $Row,
  $Col,
  $Button,
  $Input,
  $Spin,
  $TextArea,
} from "../../components/antd";
import { message, Upload, Image, Input, Tabs, Radio, Table } from "antd";
import { LayoutHeader } from "../../components/layouts/dashBoard/header";
import { LayoutFooter } from "../../components/layouts/dashBoard/footer";
import { RoutesConstant } from "../../assets/constants";
import {
  setAccessToken,
  getAccessToken,
  setData,
  getData,
} from "../../config/LocalStorage";
import "./Disease10.scss";
const { TabPane } = Tabs;

class Disease10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        oxygen: "",
        pulse: "",
        Temperature: "",
      },
      covid: "",

      errors: {},
      loading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    let data = JSON.parse(getData());
    const form = { ...this.state.form };
    form.oxygen = data.oxygen;
    form.pulse = data.pulse;
    form.Temperature = data.Temperature;
    this.setState({ loading: false, form });
  };
  submit = async () => {
    const form = { ...this.state.form };
    const oxygen = form.oxygen;
    const pulse = form.pulse;
    const Temperature = form.Temperature;

    const data = {
      oxygen: oxygen,
      pulse: pulse,
      Temperature: Temperature,
    };
    this.setState({ loading: true });
    try {
      await fetch("/covid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          var covid = response["prediction_covid"];
          //   console.log(msg)

          this.setState({
            covid: covid,
          });
        });
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false });
    }
    this.resetFields();
    this.setState({ loading: false });
  };

  onHandleChange = (name, value) => {
    console.log(name, value);
    const form = { ...this.state.form };
    form[name] = value;
    this.setState({ form });
  };

  resetFields = () => {
    const { form } = this.state;

    form.Temperature = "";
    form.oxygen = "";
    form.pulse = "";

    this.setState({ form });
  };

  render() {
    const { form, errors, loading, covid } = this.state;
    return (
      <div>
        <LayoutHeader />
        {loading && <$Spin />}
        <$Row style={{ marginTop: "100px", marginLeft: "5%" }}>
          <h1>Covid</h1>
        </$Row>
        <$Row style={{ marginRight: "5%" }}>
          <$Col xl={12} sm={12}>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Enter Oxygen Level</p>
              </$Col>
              <$Col xl={10}>
                <$Input
                  name="oxygen"
                  handleChange={this.onHandleChange}
                  value={form.oxygen}
                />
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Enter Pulse</p>
              </$Col>
              <$Col xl={10}>
                <$Input
                  name="pulse"
                  handleChange={this.onHandleChange}
                  value={form.pulse}
                />
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Enter Temperature</p>
              </$Col>
              <$Col xl={10}>
                <$Input
                  name="Temperature"
                  handleChange={this.onHandleChange}
                  value={form.Temperature}
                />
              </$Col>
            </$Row>
          </$Col>
          <$Col xl={12} sm={12} className="row-button">
            {/* <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Risk of Wheezing</p>
              </$Col>
              <$Col xl={10}>
                <Input name="wheeze" disabled={true} value={wheeze} />
              </$Col>
            </$Row> */}
            {/* <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Risk of pneumonia</p>
              </$Col>
              <$Col xl={10}>
                <Input name="pneumonia" disabled={true} value={pneumonia} />
              </$Col>
            </$Row> */}
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Risk of Covid Infection</p>
              </$Col>
              <$Col xl={10}>
                <Input name="heart" disabled={true} value={covid} />
              </$Col>
            </$Row>
            <$Row>
              <$Col xl={9}></$Col>
              <$Col xl={7} style={{ padding: "20px" }}>
                <$Button onClick={this.submit}>View Suggestions</$Button>
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={15} style={{ padding: "20px" }}>
                <$TextArea />
              </$Col>
            </$Row>
          </$Col>
        </$Row>
        <LayoutFooter />
      </div>
    );
  }
}

export default Disease10;
