const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const os = require('os');
const packageJson = require('../../package.json');

module.exports = {
  name: 'botinfo',
  description: 'Displays information about the bot',
  slashData: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Get bot information like developer, company, and stats.'),
  async execute(client, interactionOrMessage) {
    const isSlash = interactionOrMessage.commandName === 'botinfo';
    const uptime = process.uptime();
    const uptimeStr = new Date(uptime * 1000).toISOString().substr(11, 8);

    const embed = new EmbedBuilder()
      .setTitle('🤖 Cherry 🍒 Bot Information')
      .setColor(0xff4da6)
      .addFields(
        { name: '👨‍💻 Developer', value: 'Oxygen', inline: true },
        { name: '🏢 Company', value: 'CodeVerse Developments', inline: true },
        { name: '📦 Version', value: packageJson.version || '1.0.0', inline: true },
        { name: '📡 Ping', value: `${client.ws.ping}ms`, inline: true },
        { name: '🕒 Uptime', value: uptimeStr, inline: true },
        { name: '🛠️ Node.js', value: process.version, inline: true },
        { name: '🧠 Memory', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true }
      )
      .setFooter({ text: 'Made with ❤️ by CodeVerse Developments' });

    if (isSlash) {
      await interactionOrMessage.reply({ embeds: [embed], ephemeral: true });
    } else {
      await interactionOrMessage.channel.send({ embeds: [embed] });
    }
  }
};