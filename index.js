const { Client, GatewayIntentBits, AuditLogEvent, AttachmentBuilder, ModalBuilder, TextInputStyle, TextInputBuilder, PermissionsBitField, Permission, MessageManager, Embed, Collection, MessageType } = require('discord.js');
const fs = require('fs');
const { Partials } = require('discord.js');
const client = new Client({ intents: [Object.keys(GatewayIntentBits), GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessageReactions,  GatewayIntentBits.GuildVoiceStates,  GatewayIntentBits.GuildMembers],
partials: [Partials.Channel, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.Message, Partials.Reaction, Partials.ThreadMember, Partials.User],
 }); 
 const { Events, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require ('discord.js');
const axios = require ('axios');
const { ChannelType } = require('discord.js');
const { createTranscript } = require('discord-html-transcripts');
var colors = require('@colors/colors');
const { QuickDB } = require("quick.db");
const db = new QuickDB();

require('dotenv').config();

const {loadEvents} = require('./src/Handlers/eventHandler');
const {loadCommands} = require('./src/Handlers/commandHandler');

client.commands = new Collection();
client.errors = new Collection();

client.login(process.env.token).then(() => {
    loadEvents(client);
    loadCommands(client);
});
