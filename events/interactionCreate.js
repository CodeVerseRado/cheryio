module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (command) {
        try {
          await command.execute(client, interaction);
        } catch (err) {
          console.error(err);
          await interaction.reply({ content: '❌ Command error!', ephemeral: true });
        }
      }
    } else if (interaction.isButton()) {
      const player = client.manager.players.get(interaction.guild.id);
      if (!player) return interaction.reply({ content: '❌ No active player.', ephemeral: true });

      if (interaction.customId === 'play') {
        player.pause(false);
        interaction.reply({ content: '▶️ Resumed', ephemeral: true });
      } else if (interaction.customId === 'pause') {
        player.pause(true);
        interaction.reply({ content: '⏸️ Paused', ephemeral: true });
      } else if (interaction.customId === 'skip') {
        player.stop();
        interaction.reply({ content: '⏭️ Skipped', ephemeral: true });
      }
    }
  }
};