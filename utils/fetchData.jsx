export const moviesOptions = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "53ee2394b3msh25779e4e4fcf647p1f913djsnffa34400ec2c",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};
export const Imovieoptions = {
  method: "GET",
  url: "https://imdb188.p.rapidapi.com",
  params: { country: "US" },
  headers: {
    "X-RapidAPI-Key": "53ee2394b3msh25779e4e4fcf647p1f913djsnffa34400ec2c",
    "X-RapidAPI-Host": "imdb188.p.rapidapi.com",
  },
};
export const theMovieDBoptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2Q1NDlmYmZhMjNkZjU2NDA5NTBiOWNiNDFjNzYxNiIsInN1YiI6IjY1NTYxZWI1ZDRmZTA0MDBmZTA2NmU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZXw4oO6bbpBicfOLvxdMjFrSwbjCUWbBYTSr9EXyVhQ",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
