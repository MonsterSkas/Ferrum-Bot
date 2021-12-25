module.exports = {

    name: 'help',
    description: 'Help',

    async execute(message, args, discord) {

        message.react('✅')
        
        const helpEmbed = new discord.MessageEmbed()
            .setColor('#94fc03')
            .setTitle('FERRUM COMMANDS')
            .setImage('https://i.pinimg.com/originals/db/01/d5/db01d5dfe6a75b5b047c00819d3e8a3d.jpg')
            .setDescription('These are the Ferrum comamnds avilable till now')
            .setFooter(`Requested by ${message.member.user.tag}`)
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
                
        )
        message.reply({embeds: [helpEmbed]})
    }
}