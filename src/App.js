import React, { Component } from "react";
import "./App.css";
import bruxa from "./img/bruxa.png";
import fada from "./img/fada.png";
import fantasma from "./img/fantasma.png";
import pirata from "./img/pirata.png";
import vampiro from "./img/vampiro.png";
import zumbi from "./img/zumbi.png";

class App extends Component {
  state = {
    carnaval: [
      { imagem: `${bruxa}`, titulo: "Bruxa" },
      { imagem: `${fantasma}`, titulo: "Fantasma" },
      { imagem: `${vampiro}`, titulo: "Vampiro" },
      { imagem: `${zumbi}`, titulo: "Zumbi" },
      { imagem: `${fada}`, titulo: "Fada" },
      { imagem: `${pirata}`, titulo: "Pirata" },
    ],
  };

  render() {
    return (
      <div className="principal">
        <h1>Carnaval VnW</h1>
        <section className="state-carnaval">
          {this.state.carnaval.map((item) => (
            <div className="carnaval">
              <img src={item.imagem} alt={item.titulo} />
              <h2>{item.titulo}</h2>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
