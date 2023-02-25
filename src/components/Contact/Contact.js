export const Contact = ({ name, number, id, onDelete }) => (
  <>
    <span>{`${name}: `}</span>
    <span>{number}</span>
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </>
);
