const { SlashCommandBuilder } = require('discord.js');
const guildSettings = require('../../utils/guildSettings');

module.exports = {
  name: '247',
  description: 'Toggle 24/7 mode (stay in voice channel indefinitely)',
  aliases: ['stay', 'alwayson'],
  slashData: new SlashCommandBuilder()
    .setName('247')
    .setDescription('Toggle 24/7 voice mode for the bot'),
  async execute(client, messageOrInteraction) {
    const isSlash = messageOrInteraction.commandName === '247';
    const guildId = messageOrInteraction.guild.id;
    const current = guildSettings.get247(guildId);
    const updated = !current;
    guildSettings.set247(guildId, updated);

    const replyText = updated
      ? '✅ 24/7 mode **enabled**. I will stay in the voice channel!'
      : '❌ 24/7 mode **disabled**. I will leave when the queue ends.';

    if (isSlash) {
      await messageOrInteraction.reply({ content: replyText, ephemeral: true });
    } else {
      await messageOrInteraction.channel.send(replyText);
    }
  },
};