import { Name, Inner, Remove } from './Contact.styled';
import { CiCircleRemove } from 'react-icons/ci';

export const Contact = ({ name, number, id, onDelete }) => (
  <>
    <Name>{`${name}: `}</Name>
    <Inner>
      <span>{number}</span>
      <Remove type="button" onClick={() => onDelete(id)}>
        <CiCircleRemove size={20}>Delete</CiCircleRemove>
      </Remove>
    </Inner>
  </>
);
