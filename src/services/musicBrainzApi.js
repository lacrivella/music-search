export const getArtists = (artists) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artists}&fmt=json&limit=25`)
    .then(res => {
      if(!res.ok) throw 'unable to fetch artists';
      return res.json();
    });
};

export const getWorks = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
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
