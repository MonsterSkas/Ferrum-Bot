module.exports = {

    name: 'help',
    description: 'Help',

    async execute(message, args, discord) {

        try {
        
        const helpEmbed = new discord.MessageEmbed()
            .setColor('#00d0ff')
            .setTitle('FERRUM COMMANDS')
            .setDescription('These are the Ferrum comamnds avilable till now')
            .addFields(

                { name: ',ping', value: 'Shows the current status of the bot.' },
                { name: ',support', value: 'Shows the support contact of the devs.' },
                { name: ',tag', value: 'Shows the tag of the user mentioned.' },
                { name: ',avatar', value: 'Shows the avadar of the user mentioned.' },
                { name: ',mc or ,membercount', value: 'Shows the present number of members of the server.' },
                { name: ',kick', value: `Kicks a mamber. Only for mods and admins.` },
                { name: ',ban', value: `Bans a mamber. Only for mods and admins.` },
                { name: ',warn', value: `Warns a mamber. Only for mods and admins.` },
                { name: ',purge', value: `Purge messages. Only for mods and admins.` },
                { name: ',modmail', value: `Sends a messaage to the mods, please don't send unnecessary modmails` }
                
        )
        message.channel.send({embeds: [helpEmbed]})
        }
        catch (err) {
            return
        }
    }
}