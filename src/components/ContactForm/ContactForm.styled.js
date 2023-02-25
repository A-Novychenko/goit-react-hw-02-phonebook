import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 8px;
  font-size: 16px;
`;
export const Input = styled(Field)`
  width: 320px;
  padding: 8px;

  font-size: 20px;
  outline: none;

  border: 1px solid blue;
  border-radius: 4px;
`;
