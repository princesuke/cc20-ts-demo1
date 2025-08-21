interface ListProps<T> {
  items: T[];
  render: (item: T) => React.ReactNode;
}

function List<T>({ items, render }: ListProps<T>) {
  return (
    <ul>
      {items.map((i, idx) => (
        <li key={idx}>{render(i)}</li>
      ))}
    </ul>
  );
}

export { List };
