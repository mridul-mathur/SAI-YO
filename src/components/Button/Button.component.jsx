import React, { Children, Component } from 'react';
import "./Button.styles.scss";

class Button extends Component {
    render() {
        const {color,background,Link}=this.props;
        return (
            <div className='Button'>
                <button style={{marginLeft:'265%',width:'135%',border:0,paddingLeft:'15px',paddingRight:'15px',background:background,backgroundColor:color,borderRadius:'0.5rem'}}>
                    {this.props.children}
                </button>
            </div>
        );
    }
}
export default Button;