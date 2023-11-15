import React, { Component } from "react";
import Car from "./Car";

class Form extends Component {
  state = {
    username: "",
    color: "",
    colors: ["", "blue", "red", "yellow", "purple", "brown"],
    comment: "",
  };

  handlePseudo = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleColor = (event) => {
    this.setState({
      color: event.target.value,
    });
  };

  handleComments = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(
      `Nom d'utilisateur : ${this.state.username} Couleur : ${this.state.color} Commentaire : ${this.state.comment}`
    );
  };

  render() {
    return (
      <div>
        <Car color={this.state.color} />
        <h1>Commentaire</h1>

        <form onSubmit={this.handleSubmitForm}>
          <div>
            <label className="text-danger" style={{ marginRight: "5px" }}>
              <strong>Pseudo</strong>
            </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handlePseudo}
              style={{
                width: "15%",
                height: "30px",
                border: "solid",
                borderBlockColor: "blue",
              }}
            ></input>
          </div>
          <div>
            <label className="mt-3 text-danger" style={{ marginRight: "5px" }}>
              <strong>Couleur</strong>
            </label>
            <select
              value={this.state.color}
              onChange={this.handleColor}
              style={{
                width: "15%",
                height: "30px",
                border: "solid",
                borderBlockColor: "blue",
              }}
            >
              {this.state.colors.map((color, index) => {
                return (
                  <option key={index} value={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="mt-3 text-danger" style={{ marginRight: "5px" }}>
              <strong className="mt-3">Commentaire</strong>
            </label>
            <textarea
              className="mt-3"
              value={this.state.comment}
              onChange={this.handleComments}
              style={{
                width: "18%",
                height: "150px",
                border: "solid",
                borderBlockColor: "blue",
              }}
            ></textarea>
          </div>

          <button
            onClick={this.handleSubmitForm}
            style={{ marginTop: "10px", marginLeft: "110px", width: "10%" }}
            type="button"
            class="btn btn-success"
          >
            Valider
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
