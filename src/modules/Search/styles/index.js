import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 2%;
`;

export const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid #e9e9e9;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  width: 80%;
`

export const Label = styled.label`
  font-weight: 600;
  width: 10%;
`;

export const Select = styled.select`
  border: none;
  border-bottom: 1px solid #e9e9e9;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  padding: 2% 0;
  margin: 5% 0;
  min-width: 67%;
`;

export const Content = styled.div`
  margin-top: 10%;
`;

export const List = styled.div`
  max-height: 800px;
  overflow-y: auto;
`;