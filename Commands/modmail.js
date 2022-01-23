module.exports = {

    name: 'modmail',
    description: 'Send a message to all mods',

    async execute(message, args, discord) {
            let msg = args.join(' ')
            let auth = message.member

        if (!msg) return message.reply(`Please include the message you want to mail!`)
        else {

            let mods = []
            mods[0] = message.guild.members.cache.get('833890521893437440')

            let sentEmbed = new discord.MessageEmbed()
                .setTitle(`Mail sent sucessfully`)
                .setColor('#00d0ff')
                .setDescription(`Be patient till the mods reply you back with a message`)
        
            message.channel.send({ embeds: [sentEmbed] })
            auth.send({ embeds: [sentEmbed] }).catch(err => {return})

            let modEmbed = new discord.MessageEmbed()
                .setColor('#00d0ff')
                .setTitle(`${auth.user.tag} sent a MODMAIL`)
                .setDescription(`${msg}`)
            
        for (i = 0; i < mods.length; i++) {

            mods[i].send({ embeds: [modEmbed] })
        }
        }
    }
}