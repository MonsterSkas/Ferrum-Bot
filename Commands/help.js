module.exports = {

    name: 'help',
    description: 'Help',

    async execute(message, args, discord) {
        
        const helpEmbed = new discord.MessageEmbed()
            .setColor('#2F3136')
            .setThumbnail("https://cdn.discordapp.com/avatars/919201684213878824/13b852ee7cfd4fd4b78dbe5d94ca3232.webp?size=512")
            .setTitle("Ferrum commands")
            .setDescription("Help!")
            .addFields(

                { name: "🟠\tModeration", value: "Moderation commands....meant for just moderators obviously\n``kick``\t``ban``\t``warn``" },
                { name: "🟢\tBasic", value: "Basic commands meant for every members of the server\n``ping``\t``tag``\t``avatar``\t``membercount/mc``\n``modmail``" }
                
        )
        message.channel.send({embeds: [helpEmbed]}).catch (err => {return})
    }
}