exports.run = {
   async: async (m, {
      client,
      body,
      groupSet,
   }) => {
      try {
         if (!m.fromMe && body && (groupSet.antivirtex && body.length > 4000)) return client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   group: true,
   botAdmin: true,
   cache: true,
   location: __filename
}
