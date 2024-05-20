//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = process.env.audio || "https://telegra.ph/file/469f1b85159adc27b1db3.mp4";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "✨✨";
global.website = process.env.GURL || "✨✨";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0f61483efa85ab8f996e5.jpg";
global.devs = "94762498519";
global.sudo = process.env.SUDO || "94762498519";
global.owner = process.env.OWNER_NUMBER || "9476249819";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/0f61483efa85ab8f996e5.jpg";
global.waPresence = process.env.WAPRESENCE || "pushed";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "truex";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

//Reactions
global.wait = '*🇱🇰 __සෙව්ම් කාර් ය ඇරබුණා rush රශ්✨ 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🤪 _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 ඉන්නකෝ පොඩ්ඩක් yalu😄අපේ රටේ හදපු දෙයක්නී🇱🇰𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '🪩'
global.dmoji = '🎐'
global.done = '🥰'
global.error = '❎' 
global.xmoji = '💗' 
 

//💌------------------------------------------💌
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBmWnVvN3hQdTMzUllXVHFRaGgzTEt1N0szYXZtaStQdXUyajVrRlExOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidW8xWFRDMDgyV3I5ZEN5TDRNMDV0cERIZEhpUkZ6V0RsWmJvRjFhU1pBOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SHNyTDZmMG9jRm9GMjdvTHVEVE1QTzVBRHc5akgzMSsvalRJZmlpM0VJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmU3FwT2hJSU9icTFtaW5MTDZhTEtwQTQ4ZXlhU09CV21WdURUZXZMTWxnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEY1pRRE1GMU9qcHNSdk1icUo2U0t3aVVpNHJidFExcXZTTFpVUXN1V2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0yVUxZUnhISmNGZGtHT1dNSFpUZlUrZVJkSmJPQ3kxeWdkZ2RZbFgraHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEpUNGltOXR3TTVERGtzbzhqMXVpaUhmRW9TN0x1Q2U4TzFuT2VDaDFIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaG5WRXU1dm5sd2xQYWtTRWJ3c0V1RUw4ZHZPY2cvTmptaEJxYVRDMWtYYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUra3lwZjBBcEl4cHh3T3ZETnFtY0JWTnp5VzYzLzhlTWp6U0Q4amVuWEpFU0txa1ZncTdrNW93WUtmeXBPNE40cFNHZ3p1S2J5aVBnTHRMMzFzQ0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6IllEY3ZJRDQwemsyNGhWN0ZmZlhiM0V0UEFTckZmZHhYTzBXRm5xUHFZTTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5tNk5Jby1OUnhhRjE2aHU5MXZEQ1EiLCJwaG9uZUlkIjoiZWQ4MzYyZTgtNWEyOS00OWFlLTkwMTMtNjhhM2RjMzQ5NTRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhuYTVYbm9Pc1BrT0g0c3JYU2swSndKc2xkaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZG82OEFBRk9talBXcTZRSmM2M25UYm5WT3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0cxQTMzTVIiLCJtZSI6eyJpZCI6Ijk0NzgzNjY0MDQ0OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InJ1c2gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wvUXh0RUJFT2FUcTdJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imc0OXhkdC9yVHgxUjN3T2I2L2ZNQjNhL0ExK0FiZ2Y5ZXl5REpSMzdFUXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imw4V2I4ZFdUbVBvUGtSdkdieVNyNko3ZDVxMHBnWk9oRVovcmRNNmRCTUgxcGUwRTRONVpkVzI0L2hwa2hKZ1VMYlN3MFdPUEZ3MFpGNlh0U2o4SUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5R09MV3IzM0Eremx0RGVUU2l1emIxeSsvcjBDcytVOUhNRHdjbVpueDNHdGtOcWhUOFdyZUc5bWtNKzJHZWlZNis0b29scUVHVXVlbStaSHNpblRBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgzNjY0MDQ0OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllPUGNYYmY2MDhkVWQ4RG0rdjN6QWQydndOZmdHNEgvWHNzZ3lVZCt4RU0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTYxNzczOTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWxHIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-rush-𝐌𝐃-𝐕10😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "rush-𝐌𝐃-𝐕11",
  ownername: process.env.OWNER_NAME || "rush",
  errorChat: process.env.ERROR_CHAT || "94762498519",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "https://github.com/Yue-Yang/ChatGPT-Siri",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com,wa.me//",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "RUSH").toUpperCase(),  
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
