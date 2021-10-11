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


/// SIMPLE KEYBOARD

// bot.on('message', (msg) => {

//   if (msg.text === 'Close') {
//     bot.sendMessage(msg.chat.id, 'Close', {
//       reply_markup: {
//         remove_keyboard: true
//       }
//     })
//   }
//   else if (msg.text === 'Reply') {
//     bot.sendMessage(msg.chat.id, 'ok', {
//       reply_markup: {
//         force_reply: true
//       }
//     })
//   } else {
//     bot.sendMessage(msg.chat.id, 'keyboard', {
//       reply_markup: {
//         keyboard: [
//           [{
//             text: 'Share my geolocation',
//             request_location: true
//           }],
//           ['Close', 'Reply'],
//           [{
//             text: 'Share my contact',
//             request_contact: true
//           }],
//         ],
//         one_time_keyboard: true
//       }
//     })
//   }
// }) 


/// SIMPLE KEYBOARD


/// INLINE KEYBOARD

//  bot.on('message', msg => {
//    const id = msg.chat.id

//   bot.sendMessage(id, 'Inline keyboard', {
//     reply_markup: {
//       inline_keyboard: [
//         [
//           { 
//             text: 'Google',
//             url: 'https://www.google.com',
//             callback_data: '1'
//           }
//         ],
//         [
//           {
//             text: 'Reply',
//             callback_data: 'reply' 
//           },
//           {
//             text: 'Forward',
//             callback_data: 'forward'
//           }
//         ]
//       ]
//     }
//   })
// })


/// SHARE CONTENT FROM YOUR BOT (GUF, VIDEO, ARTICLE, etc.)

// bot.on('inline_query', query => {

//   const results = []

//   for(let i =0; i< 5; i++){
//     results.push({
//       type: 'article',
//       id: i.toString(),
//       title: `Title ${i}`,
//       input_message_content: {
//         message_text: `Article #${i+1}`
//       }

       
//     })
//   }

//   bot.answerInlineQuery(query.id, results, {
//     cache_time: 0
//   })
// })
//
///// SHARE CONTENT FROM YOUR BOT (GUF, VIDEO, ARTICLE, etc.)


const inlineKeyboard = [
  [
    {
      text: 'Forward',
      callback_data: 'forward'
    },
    {
      text: 'Reply',
      callback_data: 'reply'
    }
  ],
  [
    {
      text: 'Edit',
      callback_data: 'edit'
    },
    {
      text: 'Delete',
      callback_data: 'delete'
    }
  ]
]

bot.onText(/\/start/, (msg, [source, match]) => {
  const chatID = msg.chat.id

  bot.sendMessage(chatID, 'Keyboard', {
    reply_markup: {
      inline_keyboard: inlineKeyboard
    }
  })

  bot.on('callback_query', query => {
    console.log('8')
    // bot.answerCallbackQuery(query.id, `${query.data}`)
  })
})

bot.on('callback_query', query => {

   const {chat, message_id, text} = query.message

  switch(query.data){
    case 'forward':
      // where (chat id), from which chat, what do you send
      bot.forwardMessage(chat.id, chat.id, message_id )
    break;
    case 'reply':
    bot.sendMessage(chat.id, 'Answering the message', {
      reply_to_message_id: message_id,
      reply_markup: {
        inline_keyboard: inlineKeyboard
      }
    })
    break;
    case 'edit':
      bot.editMessageText(`${text} edited`, {
        chat_id: chat.id,
        message_id: message_id,
        reply_markup: {inline_keyboard: inlineKeyboard}
      })
      break;
    case 'delete': 
      bot.deleteMessage(chat.id, message_id)
      break;
  }

    bot.answerCallbackQuery({
      callback_query_id: query.id
    })
})
