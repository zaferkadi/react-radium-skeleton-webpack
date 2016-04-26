import React from 'react';
import Child from './Child.js';
import Button from './Button.js';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Parent';
    
    console.log('constructor');
  }

  render() {

    return (
      <div>
        <Child/>
        <Button kind="primary">Radium Button</Button>
    </div>);
  }
}

export default Parent;
