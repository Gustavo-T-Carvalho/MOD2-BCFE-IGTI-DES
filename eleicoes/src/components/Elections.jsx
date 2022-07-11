export default function Elections({ children: elections = [] }) {
  if (elections.length === 0) {
    return null;
  }
  const { city, votes } = elections;
  const { name: cityName, absence, presence, votingPopulation } = city;
  return (
    <div className="border p-2">
      <h2 className="text-center text-lg font-semibold">
        Eleições em {cityName}
      </h2>

      <h3 className="text-center text-md ">
        Eleitores: {votingPopulation} | Abstenção: {absence} | Comparecimento:{' '}
        {presence}
      </h3>

      <ul className="flex flex-row items-center justify-center flew-wrap">
        {votes.map(item => {
          const { username, name } = item.candidate;
          const imageUrl = `img/${username}.png`;
          const { votes } = item;
          const percent = (votes / presence) * 100;
          const elected = 
          return (
            <li
              className="m-4 border p-4 flex flex-col items-center"
              key={item.id}
              className=""
            >
              <img className="rounded-full w-10" src={imageUrl} alt={name} />
              <span>{name}</span>
              <span>{percent.toFixed(2)}%</span>
              <span>{votes}</span>
              <span>{elected}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
