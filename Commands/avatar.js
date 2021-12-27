module.exports = {

    name: 'avatar',
    description: 'Shows the avatar of a user',
    async execute(message, args, discord){
    
        let memb = message.mentions.members.first();

        if (!memb) {
            
            message.reply('Buddy, mention a user whose avadar you want to see!')
        } else {

            message.react('✅')

            let avEmbed = new discord.MessageEmbed()
                .setTitle(`${memb.user.tag}'s avatar`)
                .setColor('#94fc03')
                .setImage(memb.user.displayAvatarURL( { dynamic: true, size: 512 } ) )
                .setFooter(`Requested by ${message.author.tag}`)
            
            message.channel.send({embeds: [avEmbed]})
        }
    }
}