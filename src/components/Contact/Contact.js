import { Name, Inner, Remove } from './Contact.styled';

export const Contact = ({ name, number, id, onDelete }) => (
  <>
    <Name>{`${name}: `}</Name>
    <Inner>
      <span>{number}</span>
      <Remove type="button" onClick={() => onDelete(id)}>
        X
      </Remove>
    </Inner>
  </>
);
