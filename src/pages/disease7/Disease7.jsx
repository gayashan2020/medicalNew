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
} from "../../config/LocalStorage";
import "./Disease7.scss";
const { TabPane } = Tabs;
const columns = [
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Gender",
    dataIndex: "Gender",
    key: "Gender",
  },
  {
    title: "Cholesterol",
    dataIndex: "Cholesterol",
    key: "Cholesterol",
  },
  {
    title: "Pulse",
    dataIndex: "Pulse",
    key: "Pulse",
  },
  {
    title: "Smoke",
    dataIndex: "Smoke",
    key: "Smoke",
  },
  {
    title: "Alcohol",
    dataIndex: "Alcohol",
    key: "Alcohol",
  },
  {
    title: "Risk",
    dataIndex: "Risk",
    key: "Risk",
  },
];

const columnsW = [
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Gender",
    dataIndex: "Gender",
    key: "Gender",
  },
  {
    title: "Anxiety",
    dataIndex: "Anxiety",
    key: "Anxiety",
  },
  {
    title: "Shortness of breath",
    dataIndex: "Shortness_of_breath",
    key: "Shortness_of_breath",
  },
  {
    title: "Smoke",
    dataIndex: "Smoke",
    key: "Smoke",
  },
  {
    title: "Alcohol",
    dataIndex: "Alcohol",
    key: "Alcohol",
  },
  {
    title: "Risk",
    dataIndex: "Risk",
    key: "Risk",
  },
];

const columnsP = [
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Gender",
    dataIndex: "Gender",
    key: "Gender",
  },
  {
    title: "Shortness of breath",
    dataIndex: "Shortness_of_breath",
    key: "Shortness_of_breath",
  },
  {
    title: "Pulse",
    dataIndex: "Pulse",
    key: "Pulse",
  },
  {
    title: "Smoke",
    dataIndex: "Smoke",
    key: "Smoke",
  },
  {
    title: "Alcohol",
    dataIndex: "Alcohol",
    key: "Alcohol",
  },
  {
    title: "Risk",
    dataIndex: "Risk",
    key: "Risk",
  },
];

class Disease7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        age: "",
        Gender: "",
        Cholesterol: "",
        Pulse: "",
        Smoke: "",
        Alcohol: "",
        Shortness_of_breath: "",
        Anxiety: "",
      },
      heart: "",
      pneumonia: "",
      wheeze: "",

      dataH: [],
      dataW: [],
      dataP: [],
      errors: {},
      loading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });

    this.setState({ loading: false });
  };
  submit = async () => {
    const form = { ...this.state.form };
    const age = form.age;
    const Gender = form.Gender;
    const Cholesterol = form.Cholesterol;
    const Pulse = form.Pulse;
    const Smoke = form.Smoke;
    const Alcohol = form.Alcohol;
    const Shortness_of_breath = form.Shortness_of_breath;
    const Anxiety = form.Anxiety;

    const data = {
      age: age,
      Gender: Gender,
      Cholesterol: Cholesterol,
      Pulse: Pulse,
      Smoke: Smoke,
      Alcohol: Alcohol,
      Shortness_of_breath: Shortness_of_breath,
      Anxiety: Anxiety,
    };
    this.setState({ loading: true });
    try {
      await fetch("/risk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          var heart = response["prediction_heart"];
          var wheeze = response["prediction_wheeze"];
          var pneumonia = response["prediction_pneumonia"];
          //   console.log(msg)

          this.setState({
            heart: heart,
            wheeze: wheeze,
            pneumonia: pneumonia,
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

    form.Alcohol = "";
    form.Anxiety = "";
    form.Cholesterol = "";
    form.Gender = "";
    form.Pulse = "";
    form.Shortness_of_breath = "";
    form.Smoke = "";
    form.age = "";

    this.setState({ form });
  };

  render() {
    const {
      form,
      errors,
      loading,
      wheeze,
      heart,
      pneumonia,
      dataH,
      dataP,
      dataW,
    } = this.state;
    return (
      <div>
        <LayoutHeader />
        {loading && <$Spin />}
        <$Row style={{ marginTop: "100px", marginLeft: "5%" }}>
          <h1>Wheezing</h1>
        </$Row>
        <$Row style={{ marginRight: "5%" }}>
          <$Col xl={12} sm={12}>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Enter Age</p>
              </$Col>
              <$Col xl={10}>
                <$Input
                  name="age"
                  handleChange={this.onHandleChange}
                  value={form.age}
                />
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Enter Gender</p>
              </$Col>
              <$Col xl={10}>
                <Radio.Group
                  value={form.Gender}
                  onChange={(e) => {
                    this.onHandleChange("Gender", e.target.value);
                  }}
                >
                  <Radio value={1}>Male</Radio>
                  <Radio value={0}>Female</Radio>
                </Radio.Group>
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Enter cholesterol level</p>
              </$Col>
              <$Col xl={10}>
                <$Input
                  name="Cholesterol"
                  handleChange={this.onHandleChange}
                  value={form.Cholesterol}
                />
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Enter Pulse</p>
              </$Col>
              <$Col xl={10}>
                <$Input
                  name="Pulse"
                  handleChange={this.onHandleChange}
                  value={form.Pulse}
                />
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Smoke</p>
              </$Col>
              <$Col xl={10}>
                <Radio.Group
                  value={form.Smoke}
                  onChange={(e) => {
                    this.onHandleChange("Smoke", e.target.value);
                  }}
                >
                  <Radio value={1}>Yes</Radio>
                  <Radio value={0}>No</Radio>
                </Radio.Group>
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Anxiety</p>
              </$Col>
              <$Col xl={10}>
                <Radio.Group
                  value={form.Anxiety}
                  onChange={(e) => {
                    this.onHandleChange("Anxiety", e.target.value);
                  }}
                >
                  <Radio value={1}>Yes</Radio>
                  <Radio value={0}>No</Radio>
                </Radio.Group>
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Alcohol Usage</p>
              </$Col>
              <$Col xl={10}>
                <Radio.Group
                  value={form.Alcohol}
                  onChange={(e) => {
                    this.onHandleChange("Alcohol", e.target.value);
                  }}
                >
                  <Radio value={1}>Yes</Radio>
                  <Radio value={0}>No</Radio>
                </Radio.Group>
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Shortness of Breath</p>
              </$Col>
              <$Col xl={10}>
                <Radio.Group
                  value={form.Shortness_of_breath}
                  onChange={(e) => {
                    this.onHandleChange("Shortness_of_breath", e.target.value);
                  }}
                >
                  <Radio value={1}>Yes</Radio>
                  <Radio value={0}>No</Radio>
                </Radio.Group>
              </$Col>
            </$Row>
          </$Col>
          <$Col xl={12} sm={12} className="row-button">
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Risk of Wheezing</p>
              </$Col>
              <$Col xl={10}>
                <Input name="wheeze" disabled={true} value={wheeze} />
              </$Col>
            </$Row>
            {/* <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Risk of pneumonia</p>
              </$Col>
              <$Col xl={10}>
                <Input name="pneumonia" disabled={true} value={pneumonia} />
              </$Col>
            </$Row> */}
            {/* <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Risk of Heart Attack</p>
              </$Col>
              <$Col xl={10}>
                <Input name="heart" disabled={true} value={heart} />
              </$Col>
            </$Row> */}
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

export default Disease7;
