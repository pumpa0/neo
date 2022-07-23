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
      let text = '• *Group* : https://chat.whatsapp.com/KBxslpQTy08Djs32qK2TJQ\n'
      text += '• *Donate* : https://saweria.co/HanBotz\n\n'
      text += 'Fitur lainnya di hanbotz.xyz'
      await client.sendList(m.chat, '', text, '© 2022 HanBotzX', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
