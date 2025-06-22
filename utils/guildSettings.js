const settings = {};

module.exports = {
  get247(guildId) {
    return settings[guildId]?.mode247 || false;
  },
  set247(guildId, value) {
    if (!settings[guildId]) settings[guildId] = {};
    settings[guildId].mode247 = value;
  }
};