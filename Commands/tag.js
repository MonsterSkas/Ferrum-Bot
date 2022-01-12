module.exports = {

    name: 'tag',
    description: 'Shows the tag of a user',
    async execute(message, args, discord) {

        try {
                let memb = message.mentions.members.first()

        if (!memb) {
            
            message.reply('**LISTEN**, mention a user whose tag you want to see, **BUD**')
        } else {

            message.react('✅').catch(err => {return})
            
            let tagEmbed = new discord.MessageEmbed()
                .setColor('#00d0ff')
                .setTitle(`${memb.user.tag}`)
            
            message.channel.send({ embeds: [tagEmbed]})
            }
        }
        catch (err) {return}
    }
}