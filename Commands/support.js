module.exports = {

    name: 'support',
    description: 'Shows the support contact of the devs',

    async execute(message, args, discord) {

        message.react('✅')

        const supportEmbed = new discord.MessageEmbed()
            .setColor('#94fc03')
            .setImage('https://thumbs.dreamstime.com/b/support-icon-technical-service-vector-symbol-sign-business-computer-illustration-help-customer-technology-black-n-maintenance-140427459.jpg')
            .addFields(

                { name: 'SUPPORT', value: 'Contact <@833890521893437440> and <@665576173828440071> for support' }
            )
        message.reply({embeds: [supportEmbed]})
    }
}