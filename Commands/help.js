module.exports = {

    name: 'help',
    description: 'Help',

    async execute(message, args, discord) {
        
        const helpEmbed = new discord.MessageEmbed()
            .setColor('#2F3136')
            .setThumbnail("https://cdn.discordapp.com/avatars/919201684213878824/13b852ee7cfd4fd4b78dbe5d94ca3232.webp?size=512")
            .setTitle("Ferrum Help")
            .setDescription("Ferrum is the official bot of The Legendary Protector with simple utility features")
            .addFields(

                { name: "ping", value: "A random command for checking the status of the bot" },
                { name: "avatar", value: "Gives the avatar of an user" },
                { name: "membercount/mc", value: "Shows the current number of members of the server" },
                { name: "purge", value: "Purges messages" }
            )
            .setFooter({
                text: "Total commands 4"
            });
        message.channel.send({ embeds: [helpEmbed] }).catch(err => { return });
    }
}