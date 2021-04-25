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
const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
require('discord-buttons')(client); //Starting the discord-buttons class
```

## Example
```js
const discord = require('discord.js');
const client = new discord.Client();
require('discord-buttons')(client);

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

## When button is clicked
```js
client.on('clickButton', button => {
    if (button.id === 'click_to_function') {
      button.message.channel.send(button.clicker.user.tag)
    }
});
```

## Note: don't forgot to put `require('discord-buttons')(client)` after your client

<br>

## Documentation
Checkout more examples on our [docs](https://angelocore.gitbook.io/discord-buttons)

<br>

## Don't see the buttons?
The buttons are beta, so to see them you have to be a discord-tester or just wait for the update

<br>

> For any questions or errors, join in our server and report the bug on the #errors channel https://discord.gg/5JtyYqW

<hr>

## Contact

[Youtube](https://www.youtube.com/channel/UCxxK71QFN4_PrBhCFmH2Jmw), [Discord](https://discord.gg/5JtyYqW)