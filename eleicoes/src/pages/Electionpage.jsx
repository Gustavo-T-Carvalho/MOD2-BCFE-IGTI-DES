import { useEffect, useState } from 'react';
import { stringify } from 'uuid';
import { getCities } from '../api/api';
import { ButtonList } from '../components/ButtonList';
import Elections from '../components/Elections';
export default function Electionpage({ children }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [currentElections, setCurrentElections] = useState([]);
  const [cities, setCities] = useState([]);

  function handleCityChange(newCity) {
    setSelectedCity(newCity);
  }

  useEffect(() => {
    async funtion getElectionData(){

    }
    getElectionData();
  })



  useEffect(() => {
    if (!selectedCity) {
      return;
    }
    async function getElectionData() {
      const elections = await getElection();
      setCurrentElections(elections);
    }

    async function getbackendData() {
      const cities = await getCities();
      const backendCandidates = await getCantidates();
    }
  }, [selectedCity]);
  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">React Elections</h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <div className="my-4">
            <ButtonList selected={selectedCity} onSelect={handleCityChange}>
              {cities.map(({ id, name }) => {
                return { id, description: name };
              })}
            </ButtonList>
          </div>
          <Electionsions></Elections>
        </div>
      </main>
    </div>
  );
}
