const Discord = require("discord.js");
const client = new Discord.Client()
const { MessageButton } = require("discord-buttons")


//YOUR HANDLER

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
    .setTitle(`Testing 123`)
    .setDescription('**`[ CLICK THE BUTTON TO GO TO YOUTUBE ]`**')
    
    
  
let button2 = new MessageButton()
.setStyle('url')
  .setLabel('Test Button') //default: NO_LABEL_PROVIDED
  .setURL('https://youtube.com') //note: if you use other style you must provide id using .setID('myid')
.setID('testing_123')


message.channel.send({ embed: embed, ephemeral: true, buttons: [ button2 ]});

    
   client.on('clickButton', async (button) => {
  if (button.id === 'testing_123') {
    button.channel.send(`${button.clicker.user.tag} clicked button!`);
  }
});                 
                    
                    
}}
