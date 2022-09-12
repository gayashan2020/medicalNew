import React, { Component } from "react";
import {
  removeAccessToken,
  removeUser,
  getAccessToken,
  getUser,
} from "../../config/LocalStorage";
import "./SpreadRate.scss";
import {
  $Message,
  $FormHeader,
  $Select,
  $Row,
  $Col,
  $Button,
  $Input,
  $Spin,
} from "../../components/antd";
import { LayoutHeader } from "../../components/layouts/dashBoard/header";
import { LayoutFooter } from "../../components/layouts/dashBoard/footer";
import { RoutesConstant } from "../../assets/constants";
import { Select, DatePicker, Space } from "antd";

const city = [
  "Ampara",
  "Anuradapura",
  "Badulla",
  "Batticoloa",
  "Battocolo",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalminai",
  "Kalutara",
  "Kandy",
  "Kegalla",
  "Kilinochchi",
  "Killinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Monaragala",
  "Mulative",
  "Mullativu",
  "Nuwara eliya",
  "Polonnaruwa",
  "Puttalama",
  "Rathnapura",
  "Trincomalee",
  "Vauniya",
  "Vavuniya",
];

const sickness = [
  { value: "Dengue", label: "Dengue" },
  { value: "Heart", label: "Heart attack" },
  { value: "Kidney", label: "Kidney disease" },
];

class SpreadRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        sickness: "",
        city: "",
        Date: "",
      },
      spread: "",

      errors: {},
      loading: false,
    };
  }

  onHandleChange = (name, value) => {
    console.log(name, value);
    const form = { ...this.state.form };
    form[name] = value;
    this.setState({ form });
  };

  submit = async () => {
    const form = { ...this.state.form };
    const sickness = form.sickness;
    const city = form.city;
    const Date = form.Date;

    const data = {
      sickness: sickness,
      city: city,
      Date: Date,
    };
    this.setState({ loading: true });
    try {
      await fetch("/spread", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          var spread = response["details"];

          this.setState({
            spread: spread,
          });
        });
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false });
    }
    this.resetFields();
    this.setState({ loading: false });
  };

  render() {
    const { form, loading } = this.state;
    return (
      <div>
        {loading && <$Spin />}
        <LayoutHeader />
        <$FormHeader name="Spread Rate" />
        <$Row style={{ marginTop: "5%" }}>
          <$Col xl={12} style={{ padding: "10px" }}>
            <$Row>
              <h3>Input Type</h3>
            </$Row>
            <$Row>
              <Select
                defaultValue={"Disease"}
                value={form.sickness || undefined}
                style={{ width: "100%" }}
                onChange={(value) => this.onHandleChange("sickness", value)}
              >
                {sickness.map((prop, index) => (
                  <Select.Option key={index} value={sickness[index].value}>
                    {sickness[index].label}
                  </Select.Option>
                ))}
              </Select>
            </$Row>
          </$Col>
          <$Col xl={12} style={{ padding: "10px" }}>
            <$Row>
              <h3>District</h3>
            </$Row>
            <$Row>
              <Select
                defaultValue={"District"}
                value={form.city || undefined}
                style={{ width: "100%" }}
                onChange={(value) => this.onHandleChange("city", value)}
              >
                {city.map((prop, index) => (
                  <Select.Option key={index} value={city[index]}>
                    {city[index]}
                  </Select.Option>
                ))}
              </Select>
            </$Row>
          </$Col>
        </$Row>
        <$Row>
          <$Col xl={24} style={{ padding: "10px", marginTop: "20px" }}>
            <$Row>
              <h3>Date</h3>
            </$Row>
            <$Row>
              <Space direction="vertical" style={{ width: "100%" }}>
                <DatePicker
                  style={{ width: "100%" }}
                  onChange={(value) => this.onHandleChange("Date", value)}
                />
              </Space>
            </$Row>
          </$Col>
        </$Row>
        <$Row
          style={{ justifyContent: "end", marginTop: "10px", padding: "10px" }}
        >
          <$Button className="btn-self" type="primary" onClick={this.submit}>
            Find
          </$Button>
        </$Row>
        <$Row
          style={{
            padding: "10px",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          <h1>{this.state.spread}</h1>
        </$Row>
        <LayoutFooter />
      </div>
    );
  }
}

export default SpreadRate;
