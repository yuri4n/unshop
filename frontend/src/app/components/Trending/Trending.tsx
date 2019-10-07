import * as React from "react";
import "./styles.scss";

export interface Props {}

export interface State {}

class Trending extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="trend-title-box">
          <img
            className="trend-icon"
            src="./images/icons/trending.svg"
            alt=""
          />
          <span className="trend-title">Tendencias</span>
        </div>
        <div className="items-container">
          <div className="item-box">
            <div className="img-box">
              <img
                className="img"
                src="./images/test_items/libro1.png"
                alt=""
              />
            </div>
            <div className="text-box">
              <span className="score">4.2</span>
              <br />
              <span className="title">
                Afroanimismo: Memorias de África en la apuesta por la vida
              </span>
              <br />
              <span className="autor">Jaime Arocha</span>
              <div className="btn">
                <span className="btn-text">Ver más</span>
              </div>
            </div>
          </div>
          <div className="item-box">
            <div className="img-box">
              <img
                className="img"
                src="./images/test_items/libro2.png"
                alt=""
              />
            </div>
            <div className="text-box">
              <span className="score">4.2</span>
              <br />
              <span className="title">
                Afroanimismo: Memorias de África en la apuesta por la vida
              </span>
              <br />
              <span className="autor">Jaime Arocha</span>
              <div className="btn">
                <span className="btn-text">Ver más</span>
              </div>
            </div>
          </div>
          <div className="item-box">
            <div className="img-box">
              <img
                className="img"
                src="./images/test_items/backpack.png"
                alt=""
              />
            </div>
            <div className="text-box">
              <span className="score">4.2</span>
              <br />
              <span className="title">
                Afroanimismo: Memorias de África en la apuesta por la vida
              </span>
              <br />
              <span className="autor">Jaime Arocha</span>
              <div className="btn">
                <span className="btn-text">Ver más</span>
              </div>
            </div>
          </div>
          <div className="item-box">
            <div className="img-box">
              <img
                className="img"
                src="./images/test_items/gadget1.png"
                alt=""
              />
            </div>
            <div className="text-box">
              <span className="score">4.2</span>
              <br />
              <span className="title">
                Afroanimismo: Memorias de África en la apuesta por la vida
              </span>
              <br />
              <span className="autor">Jaime Arocha</span>
              <div className="btn">
                <span className="btn-text">Ver más</span>
              </div>
            </div>
          </div>
          <div className="item-box">
            <div className="img-box">
              <img
                className="img"
                src="./images/test_items/gadget2.jpg"
                alt=""
              />
            </div>
            <div className="text-box">
              <span className="score">4.2</span>
              <br />
              <span className="title">
                Afroanimismo: Memorias de África en la apuesta por la vida
              </span>
              <br />
              <span className="autor">Jaime Arocha</span>
              <div className="btn">
                <span className="btn-text">Ver más</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trending;
