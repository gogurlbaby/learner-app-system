import styled from "styled-components";

export const HomeRegisterContainer = styled.div`
  padding-top: 4.75rem;
.form{

}
.flex-container{
    display: grid;
    grid-template-columns: 1fr;

@media (min-width: 1200px) {
     grid-template-columns: repeat(2, 1fr);
     column-gap: 3rem;
    }
}
.input-container{
    position: relative;
    background: #F5F5F5;
    border: 1px solid #E6E6E6;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;
    margin-top: 2em;
    margin-bottom: 0.5rem;
}
.input{
  background: inherit;
  border: none;
  outline: none;
  color:  #000;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Inter", serif;
  line-height: 1.5rem;
}
.select-input {
    width: 100%;
    background: inherit;
    border: none;
    outline: none;
    display: block;
    -webkit-appearance: none; /* Remove default styling in WebKit browsers */
    -moz-appearance: none; /* Remove default styling in Firefox */
    color: #666;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Inter", serif;
    appearance: none; 
    padding-right: 2rem; 
}

.select-icon {
    position: absolute;
    right: 0.75rem;
    color: #666;
    pointer-events: none;
    /* transition: transform 0.3s ease-in-out; */
}
.textarea{
  width: 100%;  
  background: #F5F5F5;
  border: 1px solid #E6E6E6;
  height: 9rem;
  border-radius: 5px;
  outline: none;
  color:  #000;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Inter", serif;
  line-height: 1.5rem;
  padding: 1.5rem;
  margin-top: 3.375rem;
  margin-bottom: 1rem;
}
.input-icon{
    color: #666666;
}
.error{
    color: red;
    font-size: 1rem;
}
.textarea-error{
    color: red;
    font-size: 1rem;
    margin-bottom: 3.375rem;
}
`;

