module.exports = {

    name: 'announce',
    description: 'Makes an announcement',

    async execute(message, args, discord) {

            let auth = message.member

            if (!message.member.permissions.has('ADMINISTRATOR' || 'MANAGE_MESSAGES')) {
            
                return message.reply(`You don't have the permission to make announcements`).catch (err => {return})

            } else {

                message.delete().catch(err => {return})

                let announcementEmbed = new discord.MessageEmbed()
                    .setAuthor(`Announcement by ${auth.user.tag}`)
                    .setThumbnail(auth.user.avatarURL())
                    .setDescription(`${args.join(' ')}`)
                    .setColor('#2F3136')
                
                message.channel.send({ embeds: [announcementEmbed] }).catch(err => {return})
            }
    }
}