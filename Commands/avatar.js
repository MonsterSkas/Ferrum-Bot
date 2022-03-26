module.exports = {

    name: 'avatar',
    description: 'Shows the avatar of a user',
    async execute(message, args, discord) {

        let memb = message.mentions.members.first();

        if (!memb) {
            
            message.reply('Buddy, **mention a user** whose avadar you want to see!');
            
        } else {

            let avEmbed = new discord.MessageEmbed()
                .setTitle(`${memb.user.tag}'s avatar`)
                .setColor('#2F3136')
                .setImage(memb.user.displayAvatarURL({ dynamic: true, size: 512 }));
            
            message.channel.send({ embeds: [avEmbed] });
        }
    } 
}