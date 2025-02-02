import styled from "styled-components";

export const LoginFormContainer = styled.div`
.input-container{
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
  width: 100%;
  background: inherit;
  border: none;
  outline: none;
  color:  #000;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Inter", serif;
  line-height: 1.5rem;
}
.input-icon{
    color: #666666;
}
.or{
  color: #000;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Inter", serif;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}
.forgot-container{
    margin-top: 1rem;
    margin-bottom: 1.5rem;
}
.forgot{
    text-decoration: none;
    color: #177DDC;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Inter", serif;
    line-height: 1.5rem;
}
.error{
    color: red;
    font-size: 1rem;
}
`;