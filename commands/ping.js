module.exports = {
    name: 'ping',
    description: '',
    execute(message,args){
        if(message.member.roles.cache.has('766686755431645205')){
            message.channel.send('Table Tennis');
        }else{
            // message.channel.send('You dont have the permission.');
            message.channel.send('You dont have the permission. Let me give you the access.');
            message.member.roles.add('766686755431645205');
        }
    }
}