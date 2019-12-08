const Discord = require('discord.js')
const bot = new Discord.Client()

// bot.on() permet de récuperer un évenement
// L'event "ready"" réagis quand le bot est prêt
// L'event "mesage" permet de récuperer un message qui à été envoyé.


bot.on('ready', () => {
    console.log('Connecté!')
})
    
bot.on('message', message =>{ 
if(message.content.startsWith('!serveur')){
    message.channel.send('**L'ip Du Serveur Est : prism.craft.gg**')
};

})
bot.login(process.env.BOT_TOKEN)
