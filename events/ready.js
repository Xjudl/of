//const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd");
  var oyun = [
    "TRjudl Workteam",
    ".yardım",
    ".youtube"

  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

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



    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};