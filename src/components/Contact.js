import React, {useState} from 'react';
import styled from 'styled-components'
import { BreakPoints, PageTitle } from '../styles/styles';

const ContactDiv = styled.form`
  width: 650px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  text-align: center;
  @media ${BreakPoints.medDown}{
    width: 100%;
    margin: 0;
  }
  @media ${BreakPoints.smallOnly}{
    grid-template-columns: 100%;
  }
`;

const Title = styled(PageTitle)`
  @media ${BreakPoints.xlargeDown}{
    font-size: 2.5rem;
  }
`;

const FieldBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-left: 2px solid var(--light-gray);
  @media ${BreakPoints.smallOnly}{
    grid-row: 2 / 3;
    border-left: none;
    border-top: 2px solid var(--light-gray);
  }
`;

const FormField = styled.div`
  position: relative;
  margin 30px;
  input{
    padding-left: 10px;
    width: 100%;
    font-size: 1.4rem;
    font-family: 'Consolas', sans-serif;
  }
  @media ${BreakPoints.medDown}{
    margin: 20px;
    input{
      font-size: 1.1rem;
    }
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  bottom: -20px;
  color: var(--error-color);
  width: max-content;
  left: 0;
`;

const Details = styled.div`
  position: relative;
  grid-column: 1 / 3;
  text-align: center;
  border-top: 2px solid var(--light-gray);
  padding: 30px;
  height: min-content;
  width: 100%;
  textarea{
    resize: none;
    font-size: 1.4rem;
    font-family: var(--primary-font);
    padding: 20px;
    width: 100%;
    height: 200px;
  }
  @media ${BreakPoints.medDown}{
    textarea{
      font-size: 1.1rem;
    }
    padding: 20px;
  }
  @media ${BreakPoints.smallOnly}{
    textarea{
      padding: 10px;
    }
  }
    `;

const SubmitBlock = styled.div`
grid-column: 1 / 3;
text-align: center;
border-top: 2px solid var(--light-gray);
padding-top: 30px;
button{
  border:none;
  font-size: 40px;
  font-family: var(--primary-font);
  background: var(--light-gray);
  padding: 0 50px;
  :hover{
    cursor: pointer;
    color: var(--white);
    background: var(--dark-gray);
    background: var(--primary-color);
  } 
}
`;

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    messageContent: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    messageContent: ""
  })
  function handleInputChange(e){
    setFormState({...formState, [e.target.name]: e.target.value})
  }
  function validateFormState(){
    //For each state property, check type and perform validation. Store any errors
    const newErrors = {};
    console.log(Object.entries(formState));
    Object.entries(formState).forEach((field)=>{
      console.log(field[0])
      const [name, value] = field;
      switch(name){
        case 'name':
          if(!value.length){
            newErrors[name] = "please enter a name";
          }
          break;
        case 'email':
          if(!value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
            newErrors[name] = "please enter a valid email"
          }
          break;
        case 'subject':
          if(!value.length){
            newErrors[name] = "please enter a subject"
          }
          break;
        case 'messageContent':
          if(!value.length){
            newErrors[name] = "please write a message"
          }
          break;
        default:
          break;
      }
    })
    setErrors(newErrors)
    return newErrors;
  }
  function submitMessage(){
    const newErrors = validateFormState();
    if(Object.keys(newErrors).length === 0){
      console.log('form is valid')
    }
    else{
      console.log(newErrors);
    }
  }
  return (
    <ContactDiv>  
      <Title>Contact</Title>
      <FieldBlock>
        <FormField>
          <input required type="text" placeholder='name' name='name' value={formState.name} onChange={handleInputChange}></input>
          <ErrorMessage>{errors.name}</ErrorMessage>
        </FormField>
        <FormField>
          <input required type="email" placeholder='email' value={formState.email} name='email' onChange={handleInputChange}></input>
          <ErrorMessage>{errors.email}</ErrorMessage>
        </FormField>
        <FormField>
          <input required type="text" placeholder='subject' value={formState.subject} name='subject' onChange={handleInputChange}></input>
          <ErrorMessage>{errors.subject}</ErrorMessage>
        </FormField>
      </FieldBlock>
      <Details>
          <textarea maxLength={400} type="textarea" placeholder='how can I help?' value={formState.messageContent} name='messageContent' onChange={handleInputChange}></textarea>
          <ErrorMessage>{errors.messageContent}</ErrorMessage>
      </Details>
      <SubmitBlock><button type='button' onClick={submitMessage}>Send</button></SubmitBlock>
    </ContactDiv>
  );
}
