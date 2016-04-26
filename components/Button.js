import React from 'react';
import Radium from 'radium';
import color from 'color';



var styles = {
  base: {
    color: '#fff',
    background: color('#0074d9').lighten(0.2).hexString(),
    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString()

    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};

@Radium
class Button extends React.Component {
	static propTypes() {
    	return {kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired}
  	}
    constructor(props) {
        super(props);
        this.displayName = 'Button';
    }
      	
    render() {
        return (<button
        style={[
          styles.base,
          styles[this.props.kind]
        ]}>
        {this.props.children}
      </button>);
    }
}

export default Button;
