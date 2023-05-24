const getScores = async () => {
  const gameId = 'IIAmr36goQ8EZ3qWfeMY';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const retrieveScores = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  };
  const response = await retrieveScores().then((data) => data.result);
  return response;
};

export default getScores;
