const { MessageEmbed } = require("discord.js")
const ayarlar = require('../ayarlar.json')

module.exports.run = async (client, message, users, args) => {

if(![(ayarlar.yetkiliROL)].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`Bu komutu sadece yetkililer kullanabilir!!!`) 

    let yardım = new MessageEmbed()
    .setColor('GREEN')
    .setTitle(`${client.user.username} - Komutlar`)
    .setDescription(`**\`Komutlar\`**
    » \`.erkek/kız <isim> <yas>\`: **Belirtilen Kullanıcıyı Kayıt Edersiniz**
    » \`.stat\`: **Etiketlediğin & Kendi Kayıtların Hakkında Bilgi Verir**
    » \`.topteyit\`: **Toplam Teyit Sıralamasını Gösterir**
    » \`.kayıtsız\`: **Etiketlediğin Kullanıcıyı Kayıtsıza Atar**
    » \`.isimler @Üye\`: **Kullanıcının Eski İsimlerini Gösterir**
    » \`.isim <isim> <yas>\`: **Belirtilen Kullanıcının İsmini Değiştirirsiniz**`)
  .setThumbnail(message.author.avatarURL({dynamic: true}))
  .setFooter("Developed By Fâvian")
  message.channel.send(yardım)
    
     
    
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardımk', 'kayıty','kayıt-yardım','yardım-kayıt'],
  permLevel: 0,
}

exports.help = {
      name: "yardım"
  
}