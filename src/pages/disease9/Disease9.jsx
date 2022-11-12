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
import { InboxOutlined } from "@ant-design/icons";
import "./Disease9.scss";
import XP from "../../assets/images/XP.png";
import XL from "../../assets/images/XL.png";
import XC from "../../assets/images/XC.png";
const { TabPane } = Tabs;
const { Dragger } = Upload;
class Disease9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "file",
      multiple: true,

      file: null,
      fileList: null,

      disease: "",
      diseaseScore: "",

      loading: false,
    };
  }

  fileHandler = async (info) => {
    const { status } = info.file;
    this.setState({
      file: info.file,
      name: info.file.name,
      fileList: info.fileList,
    });
    const data = new FormData();
    data.append("file", info.file);
    this.setState({ loading: true });
    try {
      await fetch("/lung", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response["detection"]);
          this.setState({
            disease: response["detection"],
            diseaseScore: response["detectionScore"],
          });
        });
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false });
    }

    this.setState({ loading: false });
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  fileHandlerDrop = (info) => {
    console.log("Dropped files", info, info.file);
    this.setState({
      //   file: e.dataTransfer.files,
      file: info.file,
      name: info.file.name,
      fileList: info.fileList,
    });
  };

  beforeUpload(file) {
    const isPNG =
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/tiff" ||
      file.type === "image/bmp";

    if (!isPNG) {
      $Message.error(
        `${file.name} is not a .jpg, .jpeg, .png, .gif, .tiff or a .bmp file`
      );
      return Upload.LIST_IGNORE;
    }

    return false;
  }

  submit = async () => {};

  onHandleChange = (name, value) => {
    console.log(name, value);
    const form = { ...this.state.form };
    form[name] = value;
    this.setState({ form });
  };

  render() {
    const { loading, disease } = this.state;
    return (
      <div>
        <LayoutHeader />
        {loading && <$Spin />}
        <$Row style={{ marginTop: "100px", marginLeft: "6%" }}>
          <h1>Upload your X-ray to Identify disease</h1>
        </$Row>
        <$Row style={{ marginRight: "5%" }}>
          <$Col xl={12} sm={12}>
            <$Row className="jus-con-cen row-items">
              <Dragger
                style={{ width: "100%", padding: "50px" }}
                listType="picture"
                beforeUpload={this.beforeUpload}
                //   key={this.state.theInputKey}
                //   name={form.imageName}
                onChange={this.fileHandler}
                onDrop={this.fileHandlerDrop}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">Please upload X-ray images</p>
              </Dragger>
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
                <p>Disease</p>
              </$Col>
              <$Col xl={10}>
                <Input name="heart" disabled={true} value={disease} />
              </$Col>
            </$Row>
            <$Row className="jus-con-cen row-items">
              <$Col xl={5} sm={12}>
                <p>Confidence</p>
              </$Col>
              <$Col xl={10}>
                <Input
                  name="heart"
                  disabled={true}
                  value={this.state.diseaseScore}
                />
              </$Col>
            </$Row>
            <$Row>
              <$Col xl={9}></$Col>
              <$Col xl={7} style={{ padding: "20px" }}>
                <$Button onClick={this.submit}>View Suggestions</$Button>
              </$Col>
            </$Row>
            {disease && disease === "COVID19 Chest Xray" && (
              <$Row className="jus-con-cen row-items">
                <$Col xl={15} style={{ padding: "20px" }}>
                  {/* <$TextArea /> */}
                  <Image src={XC}></Image>
                </$Col>
              </$Row>
            )}
            {disease && disease === "Lung Opacity" && (
              <$Row className="jus-con-cen row-items">
                <$Col xl={15} style={{ padding: "20px" }}>
                  {/* <$TextArea /> */}
                  <Image src={XL}></Image>
                </$Col>
              </$Row>
            )}
            {disease && disease === "PNEUMONIA Chest Xray" && (
              <$Row className="jus-con-cen row-items">
                <$Col xl={15} style={{ padding: "20px" }}>
                  {/* <$TextArea /> */}
                  <Image src={XP}></Image>
                </$Col>
              </$Row>
            )}
          </$Col>
        </$Row>
        <LayoutFooter />
      </div>
    );
  }
}

export default Disease9;
