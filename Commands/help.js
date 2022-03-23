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

                { name: "ping", value: "A random command for checking the status of the bot" },
                { name: "avatar", value: "Gives the avatar of an user" },
                { name: "membercount/mc", value: "Shows the current number of members of the server" },
                { name: "purge", value: "Purges messages" },
                { name: "kick", value: "Kicks a member" },
                { name: "ban", value: "Bans a member" },
                { name: "warn", value: "Warns a member" }
        )
        message.channel.send({embeds: [helpEmbed]}).catch (err => {return})
    }
}