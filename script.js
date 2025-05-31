// script.js
const client_id = 'Ycc719287f7e546e9b9011ec0ee0d4e97';
const redirect_uri = 'https://rebecarv.github.io/moodtrack/callback';

const moodToGenre = {
  happy: 'pop',
  sad: 'acoustic',
  energetic: 'rock',
  calm: 'chill'
};

function loginWithSpotify() {
  const mood = document.getElementById('mood').value;
  const state = mood;
  const scope = 'playlist-read-private';

  const authUrl =
    'https://accounts.spotify.com/authorize' +
    `?client_id=${client_id}` +
    `&response_type=token` +
    `&redirect_uri=${encodeURIComponent(redirect_uri)}` +
    `&scope=${encodeURIComponent(scope)}` +
    `&state=${state}`;

  window.location = authUrl;
}
