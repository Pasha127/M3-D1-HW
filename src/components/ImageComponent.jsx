import {Component} from "react";

class ImageComponent extends Component{
    render(){
        return(
            <img style={{height: this.props.ySize, width: this.props.xSize}} src={this.props.src} alt={this.props.alt}/>
        )
    }
}

export default ImageComponent