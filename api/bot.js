const { Telegraf } = require('telegraf');
const QRCode = require('qrcode');

module.exports = async (req, res) => {
  const bot = new Telegraf(process.env.8146094042:AAH0MU9-QdyjM9b7wLb1vMF1uw-WnfLk-GQ);

  const ADMIN_KEY = "Cl339950";
  const PRICE = 60;
  const IMG = "https://i.ibb.co/3ymZ8zrq/IMG-0792.jpg";
  const CHANNEL = "https://t.me/addlist/WIPPhibFLBI4MTZh";

  const payments = {
    BTC: "1NtpN3aPZowqEzX16E5cMUHQ16P9KHQtiy",
    ETH: "0x8cBc2AD1dF8c0e42465a9E80c1B84FeB0dEE0D87",
    LTC: "LhWYtDeDPfUtEpbJC2Pho7xQTXfEEXj6UY"
  };

  const subscribed = new Set();
  const admins = new Set();
  const sandboxState = new Map();

  const tos = `RAK OTP BOT - TERMS OF SERVICE
Last Updated: December 2025
1. SERVICE DESCRIPTION
RAK OTP Bot is a professional social engineering tool designed for OTP interception and call spoofing. Access is granted for 48 hours upon successful payment.
2. PAYMENT & REFUNDS
- All payments are FINAL and NON-REFUNDABLE.
- Incorrect amount or wrong cryptocurrency sent = no access, no refund.
- Chargebacks or disputes will result in permanent ban.
- We do not store payment information.
3. PROHIBITED ACTIVITIES
- No reselling of access, keys, or bot features.
- No sharing subscription with multiple users.
- No use for illegal activities that violate local laws (user assumes full responsibility).
- No reverse engineering or copying the bot.
4. SERVICE AVAILABILITY
- 99.99% uptime guaranteed.
- Downtime for maintenance will be announced in channel.
- We reserve the right to terminate access without refund for TOS violation.
5. LIABILITY
- We are not responsible for account bans, legal issues, or any consequences from use.
- User agrees to use at own risk.
6. SUPPORT
- Support only through official channel.
- No DM support.
7. CHANGES TO TOS
We reserve the right to update these terms at any time.
By purchasing access, you agree to all terms above.
ALL SALES ARE FINAL — NO EXCEPTIONS
CC CHECKER COMING SOON 🔥`;

  bot.start((ctx) => {
    const firstName = ctx.from.first_name || "user";
    ctx.replyWithPhoto(IMG, {
      caption: `📲 Raks - 𝙊𝙏𝙋 𝘽𝙊𝙏 v.1
🟢 Operational | 📈 Uptime: 100%
👋 Hello, ${firstName} Welcome to the Raks - 𝙊𝙏𝙋 𝘽𝙊𝙏. This bot is used to register to our website and recieve notifications.
🧠 Our bot is an Hybrid between OTP Bot and 3CX. its a professional Social Engineering kit for professional OTP users.
💥 Raks - 𝙊𝙏𝙋 𝘽𝙊𝙏 have UNIQUE features that you can't find in any other bot.
🎯 Features included:
🔸 24/7 Support
🔸 Automated Payment System
🔸 Live Panel Feeling
🔸 12+ Pre-made Modes
🔸 Customizable Caller ID / Spoofing
🔸 99.99% Up-time
🔸 Customizable Scripts
🔸 Customizable Panel Actions
🔸 International Support
🔸 Multilingual Support (20+ Voices)
🔸 Live DTMF
🔸 Call Streaming - Listen to call in Real-Time!
💬 To get started, please click the buttons below.`,
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: "ENTER BOT", callback_data: "enter" }],
          [{ text: "PAYMENT", callback_data: "pay" }],
          [{ text: "FEATURES", callback_data: "features" }],
          [{ text: "VOUCHES", url: CHANNEL }],
          [{ text: "SUPPORT", url: CHANNEL }],
          [{ text: "TERMS OF SERVICE", callback_data: "tos" }]
        ]
      }
    });
  });

  // ... (all your other handlers — enter, pay, tos, sandbox, fake capture — same as your code)

  await bot.handleUpdate(req.body);
  res.sendStatus(200);
};
