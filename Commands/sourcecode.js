module.exports = {

    name: 'sourcecode',
    description: 'Shows the sourcecode of the bot',

    async execute(message, args) {

        if(!message.member.id == '833890521893437440' || '665576173828440071') return

        message.reply('https://github.com/xrn-gaming/Ferrum-Bot')
    }
}