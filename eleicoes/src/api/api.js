import axiosObject from 'axios';

const axios = axiosObject.create({
  baseURL: 'gttp://localhost:3001',
});
let CACHE_CITIES = [];
let CACHE_CANDIDATES = [];

export async function getCities() {
  if (CACHE_CITIES.length > 0) {
    return CACHE_CITIES;
  }

  const { data } = await axios.get('/cities');
  CACHE_CITIES = data.sort((a, b) => a.name.localeCompare(b.name));
  return CACHE_CITIES;
}

export async function getCandidates() {
  if (CACHE_CANDIDATES.length > 0) {
    return CACHE_CANDIDATES;
  }

  const { data } = await axios.get('/candidates');
  CACHE_CANDIDATES = data.sort((a, b) => a.name.localeCompare(b.name));
  return CACHE_CANDIDATES;
}

async function getElection(cityId) {
  const { data } = await axios.get(`/election?${cityId}`);
  const city = CACHE_CITIES.find(item => item.id === data[0].cityId);
  const processedData = data
    .sort((a, b) => b.votes - a.votes)
    .map(item => {
      const candidate = CACHE_CANDIDATES.find(
        candidate => candidate.id === item.candidateId
      );
      return { ...item, candidate };
    });
  return { votes: processedData, city };
}

export { getCities, getElection, getCandidates };
