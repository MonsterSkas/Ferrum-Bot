module.exports = {

    name: 'kick',
    description: 'Kicks a member',

    async execute(message, args, discord) {

        let memb = message.mentions.members.first()
        let fbot = message.guild.members.cache.get('919201684213878824')

        if (!message.member.permissions.has('KICK_MEMBERS' || 'ADMINISTRATOR')) {

            return message.reply(`You don't have the permission to kick members`)

        } else if (!memb) {

            let kaEmbed = new discord.MessageEmbed()
                .setDescription(`Who do you want me to kick?!! Shall I kick you?\I am a 3 time Karate world champion, and I believe you don't want your bones to be broken, do you? LOL`)
                .setImage('https://cdn.discordapp.com/attachments/919202476266229772/922414649280958474/unknown.png')
                .setColor('#94fc03')
            
            return message.reply({ embeds: [kaEmbed] })

        } else if (memb.id == '919201684213878824') {
            
            return message.reply(`How do I manage to kick myself, **DUMB**`)

        } else if (message.member.roles.highest.position <= memb.roles.highest.position) {

            return message.reply(`The one you're trying to kick is more powerfull than you, you can't kick the user!`)

        } else if (fbot.roles.highest.position <= memb.roles.highest.position) {

            message.reply(`It looks like the user you're trying to kick is more powerfull than me :/`)

        } else {

            message.react('✅')

            let reason = args.slice(1).join(' ') || 'Not specified'

            let dmEmbed = new discord.MessageEmbed()
                .setTitle(`You have been kicked from ${message.guild.name}`)
                .setColor('#94fc03')
                .addFields(

                    { name: 'REASON :', value: `${reason}` }
                )
            
            await memb.send({ embeds: [dmEmbed] }).catch(err => {

                return message.channel.send(`DM cnnot be sent to the user, the reason is mostly because the user has bocked me`)
            })

            memb.kick()

            let kickEmbed = new discord.MessageEmbed()
                .setTitle(`${memb.user.tag} has been kicked`)
                .setColor('#94fc03')
                .addFields(

                    { name: 'REASON :', value: `${reason}` }
                )
            
            message.channel.send({ embeds: [kickEmbed] })
        }
    }
}