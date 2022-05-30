import React from "react";
import 'animate.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isCzech: false, classNames: "tile en", content: props.emoji}
    }

    handleClick() {
        const newClassNames = "tile animate__animated animate__flipOutX"
        this.setState({isCzech: !this.state.isCzech});
        this.setState({classNames: this.state.isCzech ? newClassNames + " cz" : newClassNames + " en"});
    }

    handleAnimationEnd() {
        const newClassNames = "tile animate__animated animate__fadeIn"
        if (this.state.isCzech) {
            this.setState({classNames: newClassNames + " cz"});
            this.setState({content: this.props.cz});
        } else {
            this.setState({classNames: newClassNames + " en"})
            this.setState({content: this.props.emoji});
        }
    }

    render() {
        return <div id={this.props.id} title={this.props.en}
                className={this.state.classNames} onClick={() => this.handleClick()}
                onAnimationEnd={() => this.handleAnimationEnd()}>
                    {this.state.content}
                </div>
    }
 
    
}

export default Tile;