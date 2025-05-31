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

// Fetch mood playlist after redirect
window.onload = async function () {
  const token = localStorage.getItem('token');
  const mood = localStorage.getItem('mood');

  if (token && mood) {
    const genre = moodToGenre[mood];
    const res = await fetch(`https://api.spotify.com/v1/search?q=${genre}&type=playlist&limit=1`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    const playlistId = data.playlists.items[0].id;

    const tracksRes = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const tracks = await tracksRes.json();
    const container = document.getElementById('playlist');
    container.innerHTML = '<h2>Your Mood Playlist</h2>';

    tracks.items.slice(0, 5).forEach(item => {
      const track = item.track;
      container.innerHTML += `
        <div class="track">
          <strong>${track.name}</strong> by ${track.artists[0].name}
        </div>
      `;
    });

    localStorage.clear();
  }
};
