# my-bots
This repo is made for creating bots


commands: 
When you want to send some content (gif, videos, articles) by using @name_of_your_bot:
```js
bot.on('inline_query', query => {
  bot.answerInlineQuery(query.id, [results], {cache_time: 0})
}) 
```
When you use inline keyboard and want to get data which user chose (in inline keyboard each key has callback_data apart from text) and display it as alert:
```js
bot.on('callback_query', query => {
    bot.answerCallbackQuery(query.id, `${query.data}`)
})
```

### Edit / Reply / Forward / Delete


Forward (from chat id; to chat id; id of text which you want to send): 
```js
bot.forwardMessage(chat.id, chat.id, message_id )
```

Reply (to chat id; our own text; { <br/> &nbsp; &nbsp; &nbsp; id of message which we are replying <br/>}): 
```js
bot.sendMessage(chat.id, 'Answering the message', {
      reply_to_message_id: message_id,
      reply_markup: {
        inline_keyboard: inlineKeyboard
      }
    })
```
Edit (new editted text, { <br/> 
&nbsp; &nbsp; &nbsp; id of chat where you want to send message; <br/> 
&nbsp; &nbsp; &nbsp; id of message which you want to change  <br/>}): 
```js
bot.editMessageText(`${text} edited`, {
        chat_id: chat.id,
        message_id: message_id,
        reply_markup: {inline_keyboard: inlineKeyboard}
      })
```
Delete: (id of chat where you want to delete message; message id which you want to delete)
```js
bot.deleteMessage(chat.id, message_id)
```