exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'ALL MENU',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }]
      let text = '*HanBotzX* adalah sistem otomatis WhatsApp (WhatsApp Bot) yang dapat membantu untuk melakukan penjagaan terhadap grup anda. _free add to your group_\n\n'
      text += '◦ *Donate* : https://saweria.co/HanBotz\n'
      text += '◦ *Group* : https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ\n\n'
      text += 'Fitur lainnya di https://hanbotz.xyz'
      await client.sendList(m.chat, '', text, '© 2022 HanBotzX', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
