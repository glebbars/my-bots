const TelegramBot = require('node-telegram-bot-api')

const token = '1918237486:AAFS-tygBdfZ9E7OyF07fWs3RSjSlzqW6hs'
const fs = require('fs')

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


///// FORWARD DELETE EDIT REPLY MESSAGE FORWARD DELETE EDIT REPLY MESSAGE
//
// const inlineKeyboard = [
//   [
//     {
//       text: 'Forward',
//       callback_data: 'forward'
//     },
//     {
//       text: 'Reply',
//       callback_data: 'reply'
//     }
//   ],
//   [
//     {
//       text: 'Edit',
//       callback_data: 'edit'
//     },
//     {
//       text: 'Delete',
//       callback_data: 'delete'
//     }
//   ]
// ]
//
// bot.onText(/\/start/, (msg, [source, match]) => {
//   const chatID = msg.chat.id
//   bot.sendMessage(chatID, 'Keyboard', {
//     reply_markup: {
//       inline_keyboard: inlineKeyboard
//     }
//   })
// })
//
// bot.on('callback_query', query => {
//
//    const {chat, message_id, text} = query.message
//
//   switch(query.data){
//     case 'forward':
//       // where (chat id), from which chat, what do you send
//       bot.forwardMessage(chat.id, chat.id, message_id )
//     break;
//     case 'reply':
//     bot.sendMessage(chat.id, 'Answering the message', {
//       reply_to_message_id: message_id,
//       reply_markup: {
//         inline_keyboard: inlineKeyboard
//       }
//     })
//     break;
//     case 'edit':
//       bot.editMessageText(`${text} edited`, {
//         chat_id: chat.id,
//         message_id: message_id,
//         reply_markup: {inline_keyboard: inlineKeyboard}
//       })
//       break;
//     case 'delete': 
//       bot.deleteMessage(chat.id, message_id)
//       break;
//   }
//
//     // bot.answerCallbackQuery({
//     //   callback_query_id: query.id,
//     //     callback_data: '[][][]'
//     // })
//     bot.answerCallbackQuery(query.id, `${query.data}`)
//
// })

///// FORWARD DELETE EDIT REPLY MESSAGE FORWARD DELETE EDIT REPLY MESSAGE



///// SEND IMG FILE (TWO WAYS) SEND IMG FILE (TWO WAYS) SEND IMG FILE (TWO WAYS)
// bot.onText(/\/pic/, msg => {
//   bot.sendPhoto(msg.chat.id, './files/img.png', {
//     caption: 'This is simple photo'
//   })
// })

///// SEND IMG FILE (TWO WAYS) SEND IMG FILE (TWO WAYS) SEND IMG FILE (TWO WAYS)



///// SEND AUDIO FILE SEND AUDIO FILE SEND AUDIO FILE SEND AUDIO FILE SEND AUDIO FILE SEND AUDIO FILE 

// bot.onText(/\/audio/, msg => {
//   bot.sendMessage(msg.chat.id, 'Start audio uploading...')
//   fs.readFile(__dirname + '/files/audio.m4a', (err, data) => {
//     bot.sendAudio(msg.chat.id, data).then(() => {
//       bot.sendMessage(msg.chat.id, 'Audio has been uploaded...')
//     })
//   })
// })

///// SEND AUDIO FILE SEND AUDIO FILE SEND AUDIO FILE SEND AUDIO FILE SEND AUDIO FILE SEND AUDIO FILE 


///// SEND DOCUMENT FILE SEND DOCUMENT FILE SEND DOCUMENT FILE SEND DOCUMENT FILE SEND DOCUMENT FILE

// bot.onText(/\/doc/, msg => {
//   bot.sendMessage(msg.chat.id, 'Start doc uploading...')
//   fs.readFile(__dirname + '/files/document.docx', (err, data) => {
//     bot.sendDocument(msg.chat.id, data,{
//       caption: 'This is your doc'
//     }).then(() =>bot.sendMessage(msg.chat.id, 'Doc has been uploaded...'))
//   })
// })

///// SEND DOCUMENT FILE SEND DOCUMENT FILE SEND DOCUMENT FILE SEND DOCUMENT FILE SEND DOCUMENT FILE



///// SEND STICKER SEND STICKER SEND STICKER SEND STICKER SEND STICKER SEND STICKER SEND STICKER SEND STICKER 

// bot.onText(/\/sticker/, msg => {
//   bot.sendMessage(msg.chat.id, 'Start sticker uploading...')
//   fs.readFile(__dirname + '/files/sticker.webp', (err, data) => {
//     bot.sendSticker(msg.chat.id, data,{
//       caption: 'This is your sticker'
//     }).then(() =>bot.sendMessage(msg.chat.id, 'Sticker has been uploaded...'))
//   })
// })

///// SEND STICKER SEND STICKER SEND STICKER SEND STICKER SEND STICKER SEND STICKER SEND STICKER SEND STICKER 



///// SEND VIDEO FILE SEND VIDEO FILE SEND VIDEO FILE SEND VIDEO FILE SEND VIDEO FILE SEND VIDEO FILE 

// bot.onText(/\/video/, msg => {
//   const id = msg.chat.id  

//   bot.sendMessage(id, 'Started uploading video...')
//   fs.readFile(__dirname + '/files/video.MP4', (err, data) => {
//     bot.sendVideoNote(id, data)
//   })
// })

///// SEND VIDEO FILE SEND VIDEO FILE SEND VIDEO FILE SEND VIDEO FILE SEND VIDEO FILE SEND VIDEO FILE 



///// SEND GEOLOCATION SEND GEOLOCATION SEND GEOLOCATION SEND GEOLOCATION SEND GEOLOCATION SEND GEOLOCATION

// bot.onText(/\/location/, (msg) => {
//   bot.sendLocation(msg.chat.id, 40.689978, -74.045448)
// })

///// SEND GEOLOCATION SEND GEOLOCATION SEND GEOLOCATION SEND GEOLOCATION SEND GEOLOCATION SEND GEOLOCATION



///// SEND CONTACT SEND CONTACT SEND CONTACT SEND CONTACT SEND CONTACT SEND CONTACT SEND CONTACT SEND CONTACT

// bot.onText(/\/contact/, (msg) => {
//   bot.sendContact(msg.chat.id, '+380676282522', 'Oleg', {
//     last_name: 'Olegovenko'
//   })
// })

///// SEND CONTACT SEND CONTACT SEND CONTACT SEND CONTACT SEND CONTACT SEND CONTACT SEND CONTACT SEND CONTACT



//// PAYMENT WITH STRIPE PAYMENT WITH STRIPE PAYMENT WITH STRIPE PAYMENT WITH STRIPE PAYMENT WITH STRIPE 

// bot.onText(/\/pay/, (msg) => {
//   const chatId = msg.chat.id

//   bot.sendInvoice(
//     chatId, 
//     'Худи Supreme',
//     'Fairly one of the most popular and hyped hoodies ever!',
//     'payload',
//     "284685063:TEST:YjUxNWM1NjYwZTAz",
//     'START_PARAM',
//     'RUB',
//     [
//       {
//         label: 'Hoodie',
//         amount: 578900
//       }
//     ],
//     {
//       photo_url: "https://www.pinterest.com/spirit_cooper/supreme-hoodie/",
//       need_name: true,
//       // is_flexible: true
//     }
//   )
// })

//// PAYMENT WITH STRIPE PAYMENT WITH STRIPE PAYMENT WITH STRIPE PAYMENT WITH STRIPE PAYMENT WITH STRIPE 
