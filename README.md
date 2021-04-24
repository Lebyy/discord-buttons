<div align="center">

  <p>
    <a href="https://www.npmjs.com/package/discord-buttons"><img src="https://img.shields.io/npm/v/discord-buttons?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discord-buttons"><img src="https://img.shields.io/npm/dt/discord-buttons?maxAge=3600" alt="NPM downloads" /></a>
  </p>

  <p>
    <a href="https://www.npmjs.com/package/discord-buttons"><img src="https://nodei.co/npm/discord-buttons.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>

  <img src="https://cdn.discordapp.com/attachments/805407285659959356/834779256776032276/unknown.png">
  <br> <br>
</div>

## Install
```sh
$ npm i discord-buttons
```
## Setup
```js
const discord = require('discord.js');
const client = new discord.Client();
require('discord-buttons');
```

## Example
```js
const discord = require('discord.js');
const client = new discord.Client()
require('discord-buttons');

client.on('ready', () => console.log(client.user.tag));

client.on('message', message => {
    if (message.content.startsWith('!button')) {

        message.buttons('Hello World!', {
            buttons: [
                {
                    style: 'green',
                    label: 'Click to function!',
                    id: 'click_to_function'
                },
                {
                    style: 'url',
                    label: 'Vote for me!',
                    url: 'https://npmjs.com/top.gg-core'
                }
            ]
        })
    }
})

client.login("TOKEN");
```

## Embed
```js
    if (message.content.startsWith('!embed')) {

        let embed = new discord.MessageEmbed()
        .setAuthor('Oh, hey!');

        message.buttons('Hello World!', {
            buttons: [
                {
                    style: 'green',
                    label: 'Click to function!',
                    id: 'click_to_function'
                }
            ],
            embed: embed
        })
    }
```

## When button is clicked
```js
client.on('clickButton', button => {
    if (button.id === 'click_to_function') {
      button.message.channel.send(button.clicker.user.tag)
    }
});
```

## Don't see the buttons?
Now this is beta, you must be a discord tester!
Check on google how to get discord tester

<br>

> Found errors? DM me `Angelo II#0007`

<hr>

## Contact

[Youtube](https://www.youtube.com/channel/UCxxK71QFN4_PrBhCFmH2Jmw), [Discord](https://discord.gg/5JtyYqW)