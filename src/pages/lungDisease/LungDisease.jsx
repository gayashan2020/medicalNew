import React, { Component } from "react";
import {
  removeAccessToken,
  removeUser,
  getAccessToken,
  getUser,
} from "../../config/LocalStorage";
import { InboxOutlined } from "@ant-design/icons";
import { $Message, $FormHeader, $Spin } from "../../components/antd";
import { message, Upload, Image } from "antd";
const { Dragger } = Upload;
class LungDisease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "file",
      multiple: true,

      file: null,
      fileList: null,

      disease: "",

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

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading && <$Spin />}
        <$FormHeader name="Upload Image" />
        <Dragger
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
        <div className="value">
          <h3 style={{ textAlign: "center", marginTop: "30px" }}>
            Result :{this.state.disease}
          </h3>
        </div>
      </div>
    );
  }
}

export default LungDisease;
