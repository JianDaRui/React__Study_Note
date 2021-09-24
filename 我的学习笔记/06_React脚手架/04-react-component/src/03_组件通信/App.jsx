import React, { Component } from 'react';

class Header extends Component {
  render() {
    return <h2>Header</h2>
  } 
}
function Main() {
  return ( 
    <div>
      Main
      <Banner></Banner>
      <List></List>
    </div>
  );
}

function Banner() {
  return ( 
    <div>Banner</div>
  );
}
function List() {
  return ( 
    <div>List</div>
  );
}
 
function Footer() {
  return ( 
    <div>Footer</div>
  );
}


class App extends React.Component{
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  };
};

export default App;