import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function App() {
  const [fast, setfast] = useState(false);
  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);
  const resetGood =  (value)=> {
    if(!value){
      setfast(false)
      setCheap(false)
    }
    
  }
  const resetfast =  (value)=> {
    if(!value){
      setGood(false)
      setCheap(false)
    }
    
  }
  const resetcheap =  (value)=> {
    if(!value){
      setfast(false)
      setGood(false)
    }
    
  }
  return (
    <div className="App">
       <Form>
      <FormGroup switch>
        <Input type="switch" checked={good} role="switch"
        onClick={() => {
          setGood(!good);
          resetGood(good);
        }} />
        <Label check>Good</Label>
      </FormGroup>
      <FormGroup switch>
        <Input
          type="switch"
          checked={fast}
          onClick={() => {
            setfast(!fast);
            resetfast(fast);
          }}
        />
        <Label check>Fast</Label>
      </FormGroup>
      <FormGroup switch >
        <Input type="switch" checked={cheap} onClick={() => { setCheap(!cheap); resetcheap(cheap); }} />
        <Label check>Cheap</Label>
      </FormGroup>
      
    </Form>
    </div>
  );
}

export default App;
