exports.run = {
   usage: ['menutype'],
   async: async (m, {
      client,
      args,
      isPrefix
   }) => {
      const option = args[0] || 1
      if (option == 1) return client.reply(m.chat, submenu1(isPrefix), m)
      if (option == 2) return client.reply(m.chat, submenu2(isPrefix), m)
      if (option == 3) return client.reply(m.chat, submenu3(isPrefix), m)
      if (option == 4) return client.reply(m.chat, submenu4(isPrefix), m)
      if (option == 5) return client.reply(m.chat, submenu5(isPrefix), m)
   },
   error: false
}

const submenu1 = prefix => {
   return `
*PROFILE*
•  ${prefix}me

*GROUP*
•  ${prefix}antilink *on / off*
•  ${prefix}antivirtex *on / off*
•  ${prefix}filter *on / off*
•  ${prefix}localonly *on / off*
•  ${prefix}left *on / off*
•  ${prefix}welcome *on / off*
•  ${prefix}mute *1 / 0*
•  ${prefix}everyone *text*
•  ${prefix}hidetag *text*
•  ${prefix}group *close / open*
•  ${prefix}setdesc *text*
•  ${prefix}setname *text*
•  ${prefix}setleft *text*
•  ${prefix}setwelcome *text*
•  ${prefix}kick *mention or reply*
•  ${prefix}demote *mention or reply*  

*DOWNLOADER*
•  ${prefix}tiktok *link*
•  ${prefix}tikmp3 *link*
•  ${prefix}tikwm *link*
•  ${prefix}twitter *link*
•  ${prefix}ytmp3 *link*
•  ${prefix}ytmp4 *link*
•  ${prefix}play *query*
•  ${prefix}pin *link*
•  ${prefix}fb *link*
•  ${prefix}ig *link*
•  ${prefix}mediafire *link*

*OTHER*
•  ${prefix}ava *mention or reply*
•  ${prefix}sticker *reply media*

*OWNER*
•  ${prefix}autodownload *on / off*
•  ${prefix}autoread *on / off*
•  ${prefix}backup
•  ${prefix}ban *mention or reply*
•  ${prefix}unban *mention or reply*
•  ${prefix}block *mention or reply*
•  ${prefix}unblock *mention or reply*
•  ${prefix}chatbot *on / off*
•  ${prefix}prefix *symbol*
•  ${prefix}-prefix *symbol*
•  ${prefix}+prefix *symbol*
•  ${prefix}cmdstic
•  ${prefix}-cmdstic *reply sticker*
•  ${prefix}+cmdstic *reply sticker*  
•  ${prefix}disable *command*
•  ${prefix}enable *command*
•  ${prefix}-prem *mention or reply*
•  ${prefix}+prem *mention or reply*
•  ${prefix}multiprefix *on / off*
•  ${prefix}plugen *plugin*
•  ${prefix}plugdis *plugin*
•  ${prefix}join *link*
•  ${prefix}restart
•  ${prefix}self *on / off*
•  ${prefix}setpp *reply photo*
•  ${prefix}setmsg *text*
•  ${prefix}setwm *packname* | *author*
•  ${prefix}online *on / off*
•  ${prefix}-owner *mention or reply*
•  ${prefix}+owner *mention or reply*
`
}
