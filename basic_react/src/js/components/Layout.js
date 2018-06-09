import React from 'react';

import Header from './Header';

export default class Layout extends React.Component{
  constructor(){
  super();
  this.state = {title:"Welcome!"}
  }

  changeTitle(title){
   this.setState({title});
  }

  render(){
    return(
      <div>
      <h1>Hello from React</h1>
      <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
      </div>
    );  
  }
}
