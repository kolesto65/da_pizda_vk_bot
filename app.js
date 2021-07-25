console.log('\x1b[35m', 'Активирую бота...');  
const { VK } = require('vk-io');   
const commands = [];
let settings = require('./settings.json');
const vk = new VK({	token: `${settings.token}` });
                                        
var { updates } = vk;
                                                                    
updates.on('message', async (message) => {                                                                                                        
const command = commands.find(x=> x[0].test(message.text));         
if(!command) return;                                                                      
await command[1](message)                                           
})                                                                 
                                                                   
const cmd = {                   
    hear: (p, f) => {           
        commands.push([p, f]);  
    }                           
};

cmd.hear(/^(?:да)$/i, async(message) => {
    message.reply('Пизда')
});
console.log('\x1b[32m','Бот активирован!')
vk.updates.start().catch(console.error);