module.exports = {

    name: 'sourcecode',
    description: 'Shows the sourcecode of the bot',

    async execute(message, args) {

        if (!message.member.permissions.has('ADMINISTRATOR')) return
        
        if (!message.member.id == '665576173828440071') return
        else if (!message.member.id == '833890521893437440') return

        message.reply('https://github.com/xrn-gaming/Ferrum-Bot').catch (err => { return })
    }
}