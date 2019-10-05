import * as React from "react";
import "./styles.scss";

export interface Props {}

export interface State {}

class Categories extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section className="card">
          <div className="card--content" id="books">
            <span className="card-text">Libros</span>
          </div>
          <div className="card--content" id="accessories">
            <span className="card-text">Accesorios</span>
          </div>
          <div className="card--content" id="clothes">
            <span className="card-text">Ropa</span>
          </div>
          <div className="card--content" id="gadgets">
            <span className="card-text">Equipo</span>
          </div>
          <div className="card--content" id="another">
            <span className="card-text">Otros</span>
          </div>
        </section>
      </div>
    );
  }
}

export default Categories;
