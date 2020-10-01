import React, { Component } from 'react';
import './calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

  const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
  }

export default class Calculator extends Component {

  state = {...initialState }

  clearMemory(){
    this.setState({...initialState})
  }
  setOperation(operation){
    if(this.state.current === 0) {
      this.setState({operation,current: 1, clearDisplay: true})
    }else {
      const equals = operation === '='
      const currentOperation = this.state.operation
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)        
      } catch (error) {
        values[0] = this.state.values[0]
      }
      values[1] = 0

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  addDigite(n){
    if(n === '.' && this.state.displayValue.includes('.')){
      return
    }

    const clearDisplay = this.state.displayValue === '0'
     || this.state.clearDisplay

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n

    this.setState({displayValue, currentValue: false})

    if(n !== '.') {
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({values})
    }
  }
  render() {
   const addDigite = n => this.addDigite(n);
   const setOperation = op => this.setOperation(op)
    return (
      <div className='calculator'>
        <Display value={this.state.displayValue} />
        <Button label='AC' triple='triple' click={() => this.clearMemory()} />
        <Button label='/' operation='operation' click={setOperation} />
        <Button label='7' click={addDigite}/>
        <Button label='8' click={addDigite}/>
        <Button label='9'click={addDigite}/>
        <Button label='*' operation='operation' click={setOperation}/>
        <Button label='4' click={addDigite}/>
        <Button label='5'click={addDigite}/>
        <Button label='6'click={addDigite}/>
        <Button label='-' operation='operation' click={setOperation}/>
        <Button label='1'click={addDigite}/>
        <Button label='2'click={addDigite}/>
        <Button label='3'click={addDigite}/>
        <Button label='+' operation='operation' click={setOperation}/>
        <Button label='0' double='double' click={addDigite} />
        <Button label='.'click={addDigite}/>
        <Button label='=' operation='operation' click={setOperation}/>
      </div>
    )
  }
}