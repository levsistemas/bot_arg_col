// requerimientos
const Discord = require('discord.js');

//definir cliente
const Client = new Discord.Client({
    intents: 33027
});

// contenido
Client.on('ready', async ( client ) => {
    console.log(`Estoy listo!!! Hola Mundo, yo soy: ${client.user.tag}`)
});

// conectar
Client.login(process.env.token_discord)