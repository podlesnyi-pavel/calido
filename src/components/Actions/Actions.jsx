import { useRef } from 'react'

import './Actions.scss';

export const Actions = ({
  name, value, updateName, updateValue, updateArr,
}) => {
  const nameRef = useRef(null);

  const focus = () => nameRef.current.focus();

  return (
    <form className="actions" action="#" onSubmit={updateArr}>
      <button onClick={focus}>Focus a</button>

      <input
        type="text"
        required
        value={name}
        onChange={updateName}
        ref={nameRef}
      />

      <input
        type="text"
        required
        value={value}
        onChange={updateValue}
      />
    </form>
  );
};
