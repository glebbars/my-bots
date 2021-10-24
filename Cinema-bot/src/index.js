const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')
const kntbs = require('./keyboardButtons')
const keyboards = require('./keyboard')


const bot = new TelegramBot(config.TOKEN, {
  polling: true
})

helper.logStart()

bot.on('message', msg => {
const chatId = helper.getChatId(msg)

  switch (msg.text){
    case kntbs.home.films:
      bot.sendMessage(chatId, "Выберите жанр", {
        reply_markup: {
          keyboard: keyboards.film
        }
      })
    break;
    case kntbs.home.favourite:
    break;
    case kntbs.home.cinemas:
    break;
    case kntbs.back:
      bot.sendMessage(chatId, "Что хотите посмотреть?", {
        reply_markup: {
          keyboard: keyboards.home
        }
      })
    break;

  }
})

bot.onText(/\/start/, msg => {
  const greetingText = `Здравствуйте ${msg.from.first_name + msg.from.last_name}\nВыберите команду для начала работы`

  bot.sendMessage(helper.getChatId(msg), greetingText, {
    reply_markup: {
      keyboard: keyboards.home
    }
  })
})