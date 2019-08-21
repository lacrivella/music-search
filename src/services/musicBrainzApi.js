export const getArtists = (artists) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artists}&fmt=json&limit=25`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch artists';
      return res.json();
    });
}