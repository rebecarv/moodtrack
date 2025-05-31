const moodToPlaylists = {
  happy: [
    {
      name: "Mood Booster",
      url: "https://open.spotify.com/playlist/0AdbY5aqbGn33pkYeIPMll?si=76d1f250eaa94ffa"
    }
  ],
  sad: [
    {
      name: "Crying Myself to Sleep",
      url: "https://open.spotify.com/playlist/6yYA6aUGp8qUTgQWWYkPkP?si=d31f304357fe4ec6"
    }
  ],
  energetic: [
    {
      name: "Beast Mode",
      url: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP?si=4f8c723ed09f40f4"
    }
  ],
  calm: [
    {
      name: "Calming Acoustic",
      url: "https://open.spotify.com/playlist/37i9dQZF1DXaImRpG7HXqp?si=08729d59a685480b"
    }
  ]
};

function showPlaylist() {
  const mood = document.getElementById('mood').value;
  const playlist = moodToPlaylists[mood][0];
  const container = document.getElementById('playlist');

  container.classList.remove('hidden'); // 👈 show it
  container.innerHTML = `<h2>Your Mood Playlist</h2>`;

  const trackDiv = document.createElement('div');
  trackDiv.className = 'track animated-track';
  trackDiv.innerHTML = `
    <strong>${playlist.name}</strong><br/>
    <a href="${playlist.url}" target="_blank">Open on Spotify</a>
  `;
  container.appendChild(trackDiv);
}

