import React,{Component} from 'react';
import Input from  './input';
import ButtonInput from  './button';
import { Button } from 'react-bootstrap';

class Calculator extends Component{
  state = {
    num1 : 0,
    num2: 0,
    res: 0,
    mathSymbols: ["+", "-", "*", "/", "%"],
    currentSymbol: '',
    error: ''
  };

  answer = () => {
    let { num1, num2, currentSymbol, error } = this.state;

    if (!num1 || !num2) {
      this.setState({
        error: 'Enter both inputs'
      });
      return;
    }

    if (!currentSymbol) {
      this.setState({
        error: 'Choose any one of the Math Function'
      });
      return;
    }
 
    if (error) {
      this.setState({
        error: ''
      })
    }

    switch(currentSymbol){
      case "+":
        this.setState({
          res: Number(num1) + Number(num2)
        });
        break;
      case "-":
        this.setState({
          res: Number(num1) - Number(num2)
        });
        break;
      case "*":
        this.setState({
          res: Number(num1) * Number(num2)
        });
        break;
      case "%":
        this.setState({
          res: Number(num1) % Number(num2)
        });
        break;
      case "/":
        this.setState({
          res: Number(num1) / Number(num2)
        });
        break;
      default:
        break;
    }
  }

  clear = () => {
    this.setState({
      res: 0,
      num1: 0,
      num2: 0,
      currentSymbol: '',
      error: ''
  })
  }

  input1Change = (e) => {
    this.setState({num1: e.target.value})
  }

  input2Change = (e) => {
    this.setState({num2: e.target.value})
  }

  currentSymbolChange = ( value ) => {
    this.setState({ currentSymbol: value})
  }

  render(){
    const { num1, num2, res, mathSymbols, currentSymbol } = this.state;
    return (
      <div>
          <div className="row mt-3">
            <Input label="Input - 1"  value={num1} inputChange={this.input1Change} />
            <Input label="Input - 2"  value={num2} inputChange={this.input2Change}/>
          </div>
          <label>Result: {res}</label><br></br>
          {
            mathSymbols.map((value) => 
              <ButtonInput symbol={value} currentSymbol={currentSymbol} currentSymbolChange={this.currentSymbolChange}/>
            )
          }
          <ButtonInput symbol="="  answer={this.answer}/>
          <ButtonInput symbol="Clear" clear={this.clear}/>
          {
            this.state.error ? <div className="error">{this.state.error}</div> : <></>
          }
      </div>
    );
  }
}

export default Calculator;