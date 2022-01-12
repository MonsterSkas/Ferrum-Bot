module.exports = {

    name: 'avatar',
    description: 'Shows the avatar of a user',
    async execute(message, args, discord) {
        
        try {

        let memb = message.mentions.members.first();

        if (!memb) {
            
            message.reply('Buddy, mention a user whose avadar you want to see!')
        } else {

            message.react('✅').catch(err => {return})

            let avEmbed = new discord.MessageEmbed()
                .setTitle(`${memb.user.tag}'s avatar`)
                .setColor('#00d0ff')
                .setImage(memb.user.displayAvatarURL( { dynamic: true, size: 512 } ) )
                .setFooter(`Requested by ${message.author.tag}`)
            
            message.channel.send({embeds: [avEmbed]})
            }
        }
        catch (err) {
            return
        }
    } 
}