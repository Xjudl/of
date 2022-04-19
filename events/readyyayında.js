client.on('ready', () => { // TRjudl
  client.user.setStatus('available')
  client.user.setPresence({
    game: {
      name:'TRjudlWorkTeam', //Durumda Ne Yazıcak
      type: "STREAMING",
      url:"https://www.twitch.tv/xjudl" // Buraya Herhangi Bir Link Koyabilirsiniz.
    }
  });
});