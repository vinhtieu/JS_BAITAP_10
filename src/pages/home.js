import React, { Component } from "react";
import ImgPreview from "../components/imgPreview";
import GlassesList from "../components/glassesList";

export default class Home extends Component {
  state = {
    glassesImg: null,
  };

  handleSelectingGlasses = (id) => {
    this.setState({ glassesImg: id }, () => {
      console.log(this.state.glassesImg);
    });
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background: "#ffa501",
        }}>
        <div
          className="container"
          style={{
            marginInline: "auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              height: "75%",
              width: "75%",
              gap: "40px",
            }}>
            <ImgPreview selectedGlasses={this.state.glassesImg} />
            <GlassesList selectGlasses={this.handleSelectingGlasses} />
          </div>
        </div>
      </div>
    );
  }
}
