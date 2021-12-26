module.exports = {

    name: 'announce',
    description: 'Makes an announcement',

    async execute(message, args, discord) {

        let auth = message.mentions.members.first()
        let ann = args.slice(1).join(' ')

        if (!message.member.permissions.has('ADMINISTRATOR' || 'MANAGE_MESSAGES')) {
            
            return message.reply(`You don't have the permission to make announcements`)

        } else if (!auth) {

            return message.reply(`You are not passing correct auguments, please pass them correctly`)

        } else {

            message.react('✅')

            let announcementEmbed = new discord.MessageEmbed()
                .setAuthor(`Announcement by ${auth.user.tag}`)
                .setImage('https://repository-images.githubusercontent.com/441091518/a2dc8cd2-63d9-4ca6-812a-588c51e70ecf')
                .setThumbnail(auth.user.avatarURL())
                .setDescription(`${ann}`)
                .setColor('#94fc03')
                
            message.channel.send({embeds: [announcementEmbed]})
        }
    }
}