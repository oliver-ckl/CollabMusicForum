import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

//fetching data from api
export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'd830f2523bmsh91798792e0deb0dp1c46cfjsn79f19461891c',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
  }