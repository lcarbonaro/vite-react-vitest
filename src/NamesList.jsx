function NamesList({ names }) {
  return (
    <div>
      <ul>
        {names.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default NamesList;
