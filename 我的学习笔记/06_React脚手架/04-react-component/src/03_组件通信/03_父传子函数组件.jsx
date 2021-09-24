import React, { PureComponent } from 'react';

function Children(props) {
  const { name } = props;
  return ( 
    <div>{ name }</div>
   );
}

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Children name="name" age="18"></Children>
      </div>
    );
  }
}

export default App; 