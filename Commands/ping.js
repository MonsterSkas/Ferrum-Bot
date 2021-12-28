module.exports = {

    name: 'ping',
    description: 'pong',
    async execute(message, args, discord){
    
        message.react('✅')
        
        const timeTaken = Date.now() - message.createdTimestamp;

        let pingEmbed = new discord.MessageEmbed()
            .setColor('#94fc03')
            .setTitle('Pong :ping_pong:')
            .setDescription(`Time : ${timeTaken} ms`)
        
        message.channel.send({ embeds: [pingEmbed]})
    }
}