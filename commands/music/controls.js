const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'controls',
  description: 'Send a message with music control buttons',
  async execute(client, message) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('play').setLabel('▶️ Play').setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId('pause').setLabel('⏸️ Pause').setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId('skip').setLabel('⏭️ Skip').setStyle(ButtonStyle.Danger)
    );

    const embed = new EmbedBuilder()
      .setTitle('Cherry 🍒 Controls')
      .setDescription('Use the buttons below to control the music playback.')
      .setColor(0xff4da6);

    message.channel.send({ embeds: [embed], components: [row] });
  },
};