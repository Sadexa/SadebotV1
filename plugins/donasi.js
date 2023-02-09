let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [088212768618]
│ • Gopay [088212768618]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6288212768618
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
