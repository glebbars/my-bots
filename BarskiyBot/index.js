const TelegramBot = require('node-telegram-bot-api')

const token = '1918237486:AAFS-tygBdfZ9E7OyF07fWs3RSjSlzqW6hs'

const bot = new TelegramBot(token, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
})

/// REPLY STYLES: MARKDOWN (READ.ME) AND HTML

// const htmlCode = `
// <strong>Welcome!</strong>
// <b>Hello ${msg.from.first_name} ${msg.from.last_name}! I am alive :)</b>
// <i>italic</i>, <em>italic</em>
// <a href="http://www.example.com/">inline URL</a>
// <code>inline fixed-width code</code>
// <pre>pre-formatted fixed-width code block</pre>`

// const markdown = `
// *Hello, ${msg.from.first_name} ${msg.from.last_name}!*
// _Italic font_`

/// REPLY STYLES: MARKDOWN (READ.ME) AND HTML


/// LINK AND NOTIFICATIONS SETTINGS

// bot.sendMessage(msg.chat.id, `https://fr.wikipedia.org/wiki/Barcelone`, {
//     disable_notification: true,
//     disable_web_page_preview: true
// })


/// LINK AND NOTIFICATIONS SETTINGS



bot.on('message', (msg) => {

  if (msg.text === 'Close') {
    bot.sendMessage(msg.chat.id, 'Close', {
      reply_markup: {
        remove_keyboard: true
      }
    })
  }
  else if (msg.text === 'Reply') {
    bot.sendMessage(msg.chat.id, 'ok', {
      reply_markup: {
        force_reply: true
      }
    })
  } else {
    bot.sendMessage(msg.chat.id, 'keyboard', {
      reply_markup: {
        keyboard: [
          [{
            text: 'Share my geolocation',
            request_location: true
          }],
          ['Close', 'Reply'],
          [{
            text: 'Share my contact',
            request_contact: true
          }],
        ],
        one_time_keyboard: true
      }
    })
  }

console.log('***')
})