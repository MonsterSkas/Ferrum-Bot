module.exports = {

    name: 'sourcecode',
    description: 'Shows the sourcecode of the bot',

    async execute(message, args) {

        if(!message.member.permissions.has('ADMINISTRATOR')) return

        message.reply('https://github.com/xrn-gaming/Ferrum-Bot')
    }
}