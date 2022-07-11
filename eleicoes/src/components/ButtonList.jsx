export default function ButtonList({ children = [], selected, onSelect }) {
  if (children.length === 0) {
    return null;
  }
  return (
    <ul className="flex flex-row items-center justify-center flex-wrap">
      {children.map(item => {
        const extraClassName =
          selected === item.id ? 'bg-green-500 text-white' : '';
        return (
          <li
            key={item.id}
            className={`w-24 m-2 border text-center cursos-pointer ${extraClassName}`}
            onClick={() => onSelect(item.id)}
          >
            item.description
          </li>
        );
      })}
    </ul>
  );
}
