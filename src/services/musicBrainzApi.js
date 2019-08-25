export const getArtists = (artists, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artists}&fmt=json&limit=25&offset=${(page - 1) * 25}`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch artists';
      return res.json();
    });
};

export const getWorks = (id, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=25&offset=${(page - 1) * 25}`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch works';
      return res.json();
    });
};

export const getRecording = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch recordings';
      return res.json();
    });
};

export const getLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch lyrics';
      return res.json();
    });
};
