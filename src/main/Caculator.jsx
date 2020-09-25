import React, { Component } from 'react';
import './calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

export default class Calculator extends Component {

  clearMemory(){
    console.log('Limpar')
  }
  setOperation(operation){
    console.log('Operação')
  }

  addDigite(n){
    console.log(n)
  }
  render() {
   const addDigite = n => this.addDigite(n);
   const setOperation = op => this.setOperation(op)
    return (
      <div className='calculator'>
        <Display value='100' />
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