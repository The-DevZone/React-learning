import React from 'react';
import { useRef } from 'react';

 export function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> name</label>
        <br />

        <input type="text"  ref={nameRef}placeholder="enter your name" />
        
        <br /> <br />
        
        <label htmlFor="email"> email</label>
        
        <br />
        
        <input type="email" ref={emailRef}  placeholder="enter your email" />
        
        <br />
        
        <label htmlFor="password">password</label>
        
        <br /> <br />
        
        <input type="password" ref={passwordRef}  placeholder="enter your password" />
        <button onClick={handleSubmit}>submit </button>
      </form>

    </>
  )
};


