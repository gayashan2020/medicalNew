import React, { Component } from "react";
import {
  $Message,
  $FormHeader,
  $Row,
  $Col,
  $Button,
  $Input,
} from "../../components/antd";
import { Carousel, Select } from "antd";
import welcome from "../../assets/images/welcome.jpg";
import { LayoutHeader } from "../../components/layouts/dashBoard/header";
import { LayoutFooter } from "../../components/layouts/dashBoard/footer";
import { RoutesConstant } from "../../assets/constants";
import { setAccessToken, getAccessToken } from "../../config/LocalStorage";
import { v4 as uuid } from 'uuid';
class Disease1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: "",
        name: "",
        age: "",
        gender: "male",
      },

      errors: {},
      loading: false,
    };
  }

  componentDidMount = async () => {
    var rand = uuid();
    const form = { ...this.state.form };
    form.id = rand;
    this.setState({ form });
  };

  onHandleChange = (name, value) => {
    console.log(name, value);
    const form = { ...this.state.form };
    form[name] = value;
    this.setState({ form });
  };

  submit = async () => {
    const form = { ...this.state.form };
    const id = form.id;
    const name = form.name;
    const age = form.age;
    const gender = form.gender;

    const data = {
      id: id,
      name: name,
      age: age,
      gender: gender,
    };
    this.setState({ loading: true });
    setAccessToken(JSON.stringify(data));
    this.props.history.push(RoutesConstant.disease2);
    this.setState({ loading: false });
  };
  
  navigateSpread = () => {
    this.props.history.push(RoutesConstant.spreadRate);
  };

  navigateDisease1 = () => {
    this.props.history.push(RoutesConstant.spreadRate);
  };

  render() {
    const { form, errors, loading } = this.state;
    return (
      <div>
        <LayoutHeader />
        <$Row style={{ marginTop: "100px", marginLeft: "5%" }}>
          <h1>User Details</h1>
        </$Row>
        <$Row style={{ margin: "1%", justifyContent: "center" }}>
          <$Col xl={20}>
            <$Row>
              <$Col xl={4}>
                <h3>Reference Number</h3>
              </$Col>
              <$Col xl={12}>
                <h3>{form.id}</h3>
              </$Col>
            </$Row>
            <$Row>
              <$Col xl={4}>
                <h3>Enter Name</h3>
              </$Col>
              <$Col xl={12}>
                <$Input
                  name="name"
                  handleChange={this.onHandleChange}
                  value={form.name}
                />
              </$Col>
            </$Row>
            <$Row>
              <$Col xl={4}>
                <h3>Enter Age</h3>
              </$Col>
              <$Col xl={12}>
                <$Input
                  name="age"
                  handleChange={this.onHandleChange}
                  value={form.age}
                />
              </$Col>
            </$Row>
            <$Row>
              <$Col xl={4}>
                <h3>Enter Gender</h3>
              </$Col>
              <$Col xl={12}>
                <Select
                  defaultValue={"Gender"}
                  value={form.gender || undefined}
                  style={{ width: "100%" }}
                  onChange={(value) => this.onHandleChange("gender", value)}
                >
                  <Select.Option value={"male"}>Male</Select.Option>
                  <Select.Option value={"female"}>Female</Select.Option>
                </Select>
              </$Col>
            </$Row>
          </$Col>
        </$Row>
        <$Row
          style={{ justifyContent: "end", margin: "10px", padding: "10px" }}
        >
          <$Button
            style={{
              width: "80px",
              height: "50px",
              color: "white",
              backgroundColor: "gray",
            }}
            onClick={this.submit}
          >
            Next
          </$Button>
        </$Row>
        <LayoutFooter />
      </div>
    );
  }
}

export default Disease1;
