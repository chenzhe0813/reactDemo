import React, { Component } from 'react';
import TestComponent from './TestComponent';
import Money from './Money';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // demo1
  // constructor(props){
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event){
  //   this.setState({value: event.target.value.toUpperCase()});
  // }

  // handleSubmit(event){
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  // render(){
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <label>
  //         Name:
  //         <input type="text" value={this.state.value} onChange={this.handleChange} />
  //       </label>
  //       <input type="submit" value="提交" />
  //     </form>
  //   )
  // }


  // demo2
  // constructor(props){
  //   super(props);
  //   this.state = {date: new Date()};
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // componentDidMount(){
  //   let this_ = this;
  //   this.timerID = setInterval(()=>{
  //     this_.setState({date: new Date()});
  //   },1000)
  // }

  // componentWillUnmount(){
  //   clearInterval(this.timerID);
  // }

  // handleClick(){
  //   clearInterval(this.timerID);
  // }

  // render() {
  //   let name = 'cz';
  //   let dataProps = {
  //       avatarUrl: './logo.svg',
  //       name:'testCz'
  //   }
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         {name}
  //       </p>
  //       <TestComponent author={dataProps} text='testText' date='date'/>
  //       <div>{this.state.date.toLocaleTimeString()}</div> 
  //       <div onClick={this.handleClick} className="stop">stop</div>
  //     </div>
  //   );
  // }


  // demo3
  constructor(props){
    super(props);
    this.state = {
      dm: '',
      ym: '',
    }

    this.handleMoneyChange = this.handleMoneyChange.bind(this);
  }

  handleMoneyChange(t,v){
    let value = parseFloat(v);
    if(t=='d'){
      this.setState({dm: value,ym: value+1})
    }else{
      this.setState({dm: value-1,ym: value})
    }
  }

  render(){
    return(
      <div>
        <Money type='d' money={this.state.dm} moneyChange={this.handleMoneyChange}/>
        <Money type='y' money={this.state.ym} moneyChange={this.handleMoneyChange}/>
      </div>
    )
  }
}

export default App;
