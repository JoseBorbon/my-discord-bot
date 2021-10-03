const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('alan')
    .setDescription(
      'Replies with the chorus from Wiz Khalifa - See You Again!'
    ),
  async execute(interaction) {
    await interaction.reply(
      "@Atomicton It's been a long day without you my friend, and I'll tell you all about it when I see you again!"
    );
  },
};
