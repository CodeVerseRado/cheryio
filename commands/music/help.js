const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'List all available commands with descriptions.',
  slashData: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Display a list of all available commands'),
  async execute(client, interactionOrMessage) {
    const isSlash = interactionOrMessage.commandName === 'help';

    const embed = new EmbedBuilder()
      .setTitle('📖 Cherry 🍒 Help Menu')
      .setDescription('Here are the commands you can use:')
      .setColor(0xff4da6)
      .addFields(
        { name: '/play [song/url]', value: 'Play a song from YouTube, Spotify, etc.' },
        { name: '/skip', value: 'Skip the current song.' },
        { name: '/pause', value: 'Pause the current song.' },
        { name: '/resume', value: 'Resume the paused song.' },
        { name: '/queue', value: 'View the current song queue.' },
        { name: '/247', value: 'Toggle 24/7 voice channel mode.' },
        { name: '/controls', value: 'Show music control buttons (Play/Pause/Skip).' },
        { name: '/botinfo', value: 'View bot developer and system info.' },
        { name: '/help', value: 'Show this help menu.' }
      )
      .setFooter({ text: 'Need more help? Contact CodeVerse Developments!' });

    if (isSlash) {
      await interactionOrMessage.reply({ embeds: [embed], ephemeral: true });
    } else {
      await interactionOrMessage.channel.send({ embeds: [embed] });
    }
  }
};