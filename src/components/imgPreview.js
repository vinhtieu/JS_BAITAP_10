import React, { Component } from "react";
import { database } from "../data/database";

export default class ImgPreview extends Component {
  state = {
    url: "",
  };
  handleShowingGlasses(id) {
    database.forEach((glasses) => {
      if (glasses.id === id * 1) this.setState(this.state.url === glasses.url);
    });
  }

  render() {
    return (
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
        className=" w-100">
        <figure
          style={{
            width: "228px",
            marginInline: "auto",
            zIndex: "10",
            position: "absolute",
            top: "127px",
            left: "50%",
            transform: "translateX(-50%)",
          }}>
          <img
            style={{
              objectFit: "contain",
              objectPosition: "center",
              width: "100%",
              maxHeight: "100%",
            }}
            src={this.props.selectedGlasses}
            alt=""
          />
        </figure>
        <figure
          style={{
            height: "100%",
          }}>
          <img
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              maxHeight: "100%",
            }}
            src={"./glassesImage/model.jpg"}
            alt=""
          />
        </figure>
      </div>
    );
  }
}
