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
**1** - `CTRL` + `SHIFT` + `I`
<br>
**2** - Go to console
<br>
**3** - Paste this code:
```js
webpackJsonp.push([[999],{"l":(m,e,r)=>{for(k in r.c)(m=r.c[k].exports)&&m.default&&m.default.isDeveloper==0&&Object.defineProperty(m.default,"isDeveloper",{get:()=>1})}},[["l"]]])
```
**4** - Click enter
<br>
**5** - Close the Developer Tools
<br>
**6** - Go to `User Settings`
<br>
**7** - Go to `Experiments`
<br>
**8** - Go to `Desktop Bot UI Kit Buttons`
<br>
**9** - Click and select `Treatment 1`
<br>
**10** - Done

<br>

> Found errors? DM me `Angelo II#0007`

<hr>

## Contact

[Youtube](https://www.youtube.com/channel/UCxxK71QFN4_PrBhCFmH2Jmw), [Discord](https://discord.gg/5JtyYqW)