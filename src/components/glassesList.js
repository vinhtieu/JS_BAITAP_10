import React, { Component } from "react";
import { database } from "../data/database";
import ImgPreview from "./imgPreview";

export default class GlassesList extends Component {
  renderCards = (list) => {
    return list.map((item) => {
      return (
        <div
          key={item.id}
          className=""
          style={{
            marginBlock: "auto",
            width: "350px",
            padding: "16px",
            height: "fit-content",
            background: "white",
            borderRadius: "8px",
            flex: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            cursor: "pointer",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
          onClick={() => {
            this.props.selectGlasses(item.url);
          }}>
          <figure style={{ height: "40%", padding: "14px" }}>
            <img
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
              src={item.url}
              alt="Glasses"
            />
          </figure>
          <div className="" style={{ flex: "1", padding: "16px" }}>
            <h2
              className="card-title"
              style={{ fontSize: "24px", marginBottom: "16px" }}>
              {item.name}
            </h2>
            <p
              className="card-text"
              style={{ fontSize: "16px", marginBottom: "12px" }}>
              {item.desc}
            </p>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}>
              {item.price}$
            </span>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        id="list"
        style={{
          flex: "1",
          gap: "16px",
          padding: "16px",
          background: "white",
          display: "flex",
          flexDirection: "row",
          overflowY: "hidden",
        }}>
        {this.renderCards(database)}
      </div>
    );
  }
}
