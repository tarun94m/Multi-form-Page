
import React, { useState } from 'react'
import './App.css'

const fields = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name'
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email'
  },
  {
    id: 'birthdate',
    name: 'birthdate',
    type: 'date',
    label: 'Birthdate'
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password'
  }
]

function App() {

  const [formValue, setFormValue] =useState({
    name:'',
    email: '',
    birthdate: '',
    password: ''
  });

  const [page, setPage]=useState(0);

  const [showSuccess, setShowSuccess] =useState(false);

  const lastPage = fields.length-1;

  const onChange=(e)=>{
    setFormValue({
      ...formValue,
      [`${fields[page].name}`] : e.target.value
    });
  }

  const handleFormSubmit=(e)=>{
      e.preventDefault();

      if(page === lastPage){
        alert(JSON.stringify(formValue));
        setShowSuccess(true);
      }
      else{
        setPage(page+1);
      }
  }

  const onBackClick=()=>{
    setPage(page-1);
  }


  return (
    <>
    {
      showSuccess ? (<div>This is a success page</div>) : 
      (
      <> 
      {page !==0 && (<button id='back-button' onClick={onBackClick}>{`<Back`}</button>
    )}
       <form action="" className='App' onSubmit={handleFormSubmit}>
      <label htmlFor={fields[page].name}>{fields[page].label}</label>
      <input 
      type={fields[page].type} 
      name={fields[page].name} 
      id={fields[page].id}
      value={formValue[fields[page].name]}
      onChange={onChange}
      />
      <button disabled={!formValue[fields[page].name]} type='submit'>{page === lastPage ? 'Submit' : 'Next'}</button>
    </form>
      </>
      
    )}
    
    
    </>
    
  )
}

export default App
