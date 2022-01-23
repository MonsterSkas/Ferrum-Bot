module.exports = {

    name: 'support',
    description: 'Shows the support contact of the devs',

    async execute(message, args, discord) {

        try {

        const supportEmbed = new discord.MessageEmbed()
            .setColor('#00d0ff')
            .setImage('https://thumbs.dreamstime.com/b/support-icon-technical-service-vector-symbol-sign-business-computer-illustration-help-customer-technology-black-n-maintenance-140427459.jpg')
            .addFields(

                { name: 'SUPPORT', value: 'Contact <@833890521893437440> and <@665576173828440071> for support' }
            )
        message.channel.send({embeds: [supportEmbed]})
        }
        catch (err) {return}
    }
}