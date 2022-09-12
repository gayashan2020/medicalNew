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
import {
  message,
  Upload,
  Image,
  Input,
  Tabs,
  Radio,
  Select,
  Space,
  DatePicker,
} from "antd";
import { LayoutHeader } from "../../components/layouts/dashBoard/header";
import { LayoutFooter } from "../../components/layouts/dashBoard/footer";
import { RoutesConstant } from "../../assets/constants";
import {
  setAccessToken,
  getAccessToken,
  setData,
} from "../../config/LocalStorage";
import moment from "moment";
import "./Disease11.scss";
import { StringConstant } from "../../assets/constants";
import { DemoArea } from "../../components";
import { Line } from "@ant-design/plots";
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
class Disease11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        sickness: "",
        city: "",
        Date: "",
      },
      spread: "",
      sickness: [],
      city: [],
      errors: {},
      loading: false,
      getDaysArray: [],
      graph: [],
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });

    this.setState({ loading: false });
  };
  onHandleChange = (name, value) => {
    const form = { ...this.state.form };
    form[name] = value;
    this.setState({ form });
  };

  getDaysArray = (start, end) => {
    for (
      var arr = [], dt = new Date(start);
      dt <= new Date(end);
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  getGraph = (spread, getDaysArray) => {
    let val = [];
    for (let i = 0; i < spread.length; i++) {
      // console.log(spread[i], moment(getDaysArray[i]).format("YYYY-MM-DD"), "j");
      val.push({
        scales: parseInt(spread[i]),
        Date: moment(getDaysArray[i]).format("YYYY-MM-DD"),
      });
    }
    console.log(val);
    return val;
  };

  submit = async () => {
    const form = { ...this.state.form };
    const sickness = form.sickness;
    const city = form.city;
    let getDaysArray = this.getDaysArray(
      moment(form.Date[0]).format("YYYY-MM-DD"),
      moment(form.Date[1]).format("YYYY-MM-DD")
    );

    console.log(getDaysArray, "getDaysArray");

    const data = {
      sickness: sickness,
      city: city,
      Date: getDaysArray,
    };
    this.setState({ loading: true, getDaysArray: getDaysArray });
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
      let graph = this.getGraph(this.state.spread, this.state.getDaysArray);
      this.setState({
        graph: graph,
      });
    } catch (error) {
      this.setState({ loading: false });
    }
    this.setState({ loading: false });
  };

  render() {
    const { form, loading, spread, sickness, city, getDaysArray, graph } =
      this.state;
    return (
      <div>
        <LayoutHeader />
        {loading && <$Spin />}
        <$Row style={{ marginTop: "100px", marginLeft: "5%" }}>
          <h1>Spread Rate Analysis</h1>
        </$Row>
        <$Row style={{ marginRight: "5%" }}>
          <$Col xl={12} sm={12}>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Select Disease</p>
              </$Col>
              <$Col xl={10}>
                <Select
                  value={form.sickness || undefined}
                  style={{ width: "100%" }}
                  onChange={(value) => this.onHandleChange("sickness", value)}
                >
                  {StringConstant.sick.map((prop, index) => (
                    <Select.Option
                      key={index}
                      value={StringConstant.sick[index]}
                    >
                      {StringConstant.sick[index]}
                    </Select.Option>
                  ))}
                </Select>
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Select District</p>
              </$Col>
              <$Col xl={10}>
                <Select
                  value={form.city || undefined}
                  style={{ width: "100%" }}
                  onChange={(value) => this.onHandleChange("city", value)}
                >
                  {StringConstant.cities.map((prop, index) => (
                    <Select.Option
                      key={index}
                      value={StringConstant.cities[index]}
                    >
                      {StringConstant.cities[index]}
                    </Select.Option>
                  ))}
                </Select>
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Select the Date</p>
              </$Col>
              <$Col xl={10}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <RangePicker
                    style={{ width: "100%" }}
                    onChange={(value) => this.onHandleChange("Date", value)}
                  />
                </Space>
              </$Col>
            </$Row>
          </$Col>
          <$Col xl={12} sm={12} className="row-button">
            <$Row className="jus-con-cen row-items">
              {/* <$Col xl={5} sm={12}>
                <p>Spread Rate</p>
              </$Col> */}
              <$Col xl={16}>
                {/* <Input name="heart" disabled={true} value={spread} /> */}
                {graph && (
                  <Line
                    data={graph}
                    xField="Date"
                    yField="scales"
                    autoFit={false}
                    xAxis={{ range: [0, 1], tickCount: 5 }}
                    point={{ size: 5, shape: "diamond" }}
                    label={{
                      style: {
                        fill: "#aaa",
                      },
                    }}
                  />
                )}
                {/* {console.log(spread)} */}
              </$Col>
            </$Row>
            <$Row>
              <$Col xl={9}></$Col>
              <$Col xl={7} style={{ padding: "20px" }}>
                <$Button onClick={this.submit}>View Spread Rate</$Button>
              </$Col>
            </$Row>
            {/* <$Row className="jus-con-cen row-items">
              <$Col xl={15} style={{ padding: "20px" }}>
                <$TextArea />
              </$Col>
            </$Row> */}
          </$Col>
        </$Row>
        <LayoutFooter />
      </div>
    );
  }
}

export default Disease11;
