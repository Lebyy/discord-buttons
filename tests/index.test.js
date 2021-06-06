const discord = require("discord.js");
const client = new discord.Client({ intents: discord.Intents.ALL });
const disbut = require("./src/index");
disbut(client);
const Util = require("./src/v12/Util");

client.on("ready", () => {
  console.log(client.user.tag);
  client.guilds.cache
    .get("728503987866828870")
    .commands.create({ name: "hi", description: "HI" });
});
//client.on('debug', console.log);

client.on("message", async (message) => {
  //if (message.author.bot) return;
  if (message.content.startsWith("o")) {
    let e = message.guild.emojis.cache.get("729208650131963946");

    let btn = new disbut.MessageButton()
      .setEmoji(e)
      .setStyle("gray")
      .setID("testid");

    let group1 = new disbut.MessageActionRow()
      .addComponent(btn)
      .addComponent(btn);

    let group2 = new disbut.MessageActionRow()
      .addComponent(btn)
      .addComponent(btn);

    let m = await message.channel.send(`Wumpus!!!`, {
      components: [group1, group2],
    });

    //await wait(1000);

    //m.edit('yea', { component: null });
  } else if (message.content.startsWith("s")) {
    message.channel.send(
      "sbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopap\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuusbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopapaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
      {
        tts: true,
        split: true,
      }
    );
  }
});

client.on("clickButton", async (button) => {
  await button.clicker.fetch();
  console.log(button.clicker.user.tag);

  if (button.clicker.user.id === "519759839673581568") {
    button.channel.send(`SPAMMER SMOTAN BUG ${button.clicker.member}`);
  }

  //await button.defer();
  const utilityembed = new discord.MessageEmbed().setDescription(
    `Clicked by ${button.clicker.user.tag}`
  );

  let btn = new disbut.MessageButton()
    .setEmoji("785062885952192512")
    .setID("d")
    .setStyle("blurple");

  let row = new disbut.MessageActionRow().addComponent(btn);

  await button.reply.send("hi", { components: row });
  await wait(1000);
  await button.message.edit("hi", null);
});

client.on("interaction", async (interaction) => {
  let btn = new disbut.MessageButton()
    .setEmoji("785062885952192512")
    .setID("d")
    .setStyle("blurple");

  interaction.user.send("GG", btn);

  interaction.reply("hi");
  await wait(1000);
  interaction.editReply("hi", btn);
});

client.login("");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
