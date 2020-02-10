import * as React from "react";
import "./styles.scss";

interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface Props {}

export interface State {
    items: Item[];
}

class Trending extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("/api/cart")
            .then(res => res.json())
            .then(data => {
                this.setState({ items: data });
            })
            .catch(console.log);
    }

    render() {
        return (
            <div>
                <div className="trend-title-box">
                    <img
                        className="trend-icon"
                        src="./images/icons/cart.svg"
                        alt=""
                    />
                    <span className="trend-title">Cart</span>
                </div>
                <div className="items-container">
                    {this.state.items!.map(item => (
                        <div className="item-box">
                            <div className="img-box">
                                <img
                                    className="img"
                                    src="./images/test_items/libro1.png"
                                    alt=""
                                />
                            </div>
                            <div className="text-box">
                                <span className="score"> {item.price} </span>
                                <br />
                                <span className="title">{item.name}</span>
                                <br />
                                <span className="autor">Jaime Arocha</span>
                                <div className="btn">
                                    <span className="btn-text">Ver más</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Trending;
