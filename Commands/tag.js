module.exports = {

    name: 'tag',
    description: 'Shows the tag of a user',
    async execute(message, args) {

        let memb = message.mentions.members.first()

        if (!memb) {
            
            message.reply('**LISTEN**, mention a user whose tag you want to see, **BUD**')
        } else {

            message.react('✅')

            message.reply(`${memb.user.tag}`)
        }
    }
}