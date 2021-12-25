module.exports = {

    name: 'ping',
    description: 'pong',
    async execute(message, args){
    
        message.react('✅')
        
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong :love_you_gesture:\nTime : ${timeTaken} ms`)
    }
}