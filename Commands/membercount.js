module.exports = {

    name: 'mc',
    description: 'Counts the current number of members in the server',

    async execute(message, args, discord)
    {
        message.react('✅').catch(err => {return})
        
        let mCount = message.guild.memberCount

        let mcEmbed = new discord.MessageEmbed()
            .setColor('#00d0ff')
            .setTitle('MEMBERCOUNT')
            .setDescription(`We currently have ${mCount} members in our server`)
        
        message.channel.send({ embeds: [mcEmbed] })
    }
}