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
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWE0OWQ1NDIwMDBhYTgwMjk3ZjdmMjJkMWE4NDcyNSIsInN1YiI6IjY1NTYxZWI1ZDRmZTA0MDBmZTA2NmU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.daLTI-xAVX98dSa4YGC46NWVbi61LNB5m0gJAx8S-0c",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
