module.exports = {

    name: 'tag',
    description: 'Shows the tag of a user',
    async execute(message, args, discord) {

        let memb = message.mentions.members.first()

        if (!memb) {
            
            message.reply('**LISTEN**, mention a user whose tag you want to see, **BUD**').catch(err => { return })
            
        } else {
            
            let tagEmbed = new discord.MessageEmbed()
                .setColor('#2F3136')
                .setTitle(`${memb.user.tag}`)
            
            message.channel.send({ embeds: [tagEmbed]}).catch (err => {return})
        }
    }
}