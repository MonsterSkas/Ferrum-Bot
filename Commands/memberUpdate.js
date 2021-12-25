module.exports = {

    name: 'memberUpdate',
    description: 'Detects the change of user nickname',
    async execute(oldMem, newMem, discord) {

        let upEmbed = new discord.MessageEmbed()
            .setTitle('It looks like you just changed your nickname')
            .setColor('#94fc03')
            .setDescription(`Server: ${newMem.guild.name}`)
        
        //SEND DM TO THE USER
        newMem.send({ embeds: [upEmbed] })
    }
}