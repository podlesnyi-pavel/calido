import './Table.scss';

export const Table = ({ arr }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {arr.map(obj => (
          <tr key={obj.id}>
            <td>{obj.name}</td>
            <td>{obj.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
