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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923135673658,94762498519";
global.owner = process.env.OWNER_NUMBER || "9476249819";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/0cfd55937acc8e0a8a4b3.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU56c0hwb05ZRzBHeEVMeThyQ1pwQWs0NVB1RzRMYTVSMGc2L2tIdzYyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJNTlFuTC8yRlB2UkZ4WUtQbUNZSkwzbVdWZ1VpUndlZzl3aTYyWndBYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSnRyNWlwelpKYlJFZmF3aW1sUFBsTFdicnlKU2RDV1hQS3ZMMnJuMEVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjMEp1S0JnUmZwRDBMNTUzc0NqdUhXNVhUVlVkR1ZrdFQxajlhTW5GOVVvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitOTXBDQ1FJdk1GT2c3Q3g0eC85OHE0elNEeGdxWlFJU1NRalV1VjRkVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ3bDVPQklacStNOTUwUkFaczFyOWs2WmFMbUNMTG1FR0NUd0VyL1M2Q1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFna0JiQi9ra3l6dU5CdUFhMitjb0tKakJ2MlowVytMRmRkYmZHRjlXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3ZKR1J2LzdxZ0ZHZlhrYVhTVFhadnhKZGNVZkdPbm50b01HYXk0OVVBMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVBWUYzRnVBbXdReWhFYlIvK1dKRjBBZ05MenQvbWFTcHhSVjFVWEx0YzFwWGhPNjVzYUorYVRvc3ZCVnBrdUZuajMwSUdLdTJLQ0VoRGhkNXIzempBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IlZyMnJLTXkzOUVkZHhBTE43YUp0MHYrbmVBMUVBZ0hZVEI5YU4yTGt3c1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZLdTBZa3M2U09DTHBPSHFUZ3JTSXciLCJwaG9uZUlkIjoiN2MyNmFiNTYtZWYzYS00NDEzLTllMjItMjQzN2M5NGUwYjJhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV5Y1grUnJOSjZQRTZRd2FFQ09HNmJwczBhVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWU1pqUW1TOG84cmxLa3MySTlEMHdzRHhiemc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTg1NjlBUUoiLCJtZSI6eyJpZCI6Ijk0NzYyNDk4NTE5OjkwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InJ1c2gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01QZHlwY0ZFSTdLb0xJR0dBOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjExUHBEa3ZFRFBjdmw1cytSek9nY1RJTWpyYlVFaGN3K3RNd2hPbGlxRzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVwVjRmUHh0d1pkWG9RcWR1ZTNxSmxLcVFIMERmNnFGUExISk5ZdFNGZndraVJGUGs2Q0g5ZWdTYjNab2o2dE5vWmJmY05WeWhYanh1Vkx0TjdpQ0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2S2ZBMFMvekdPYVhOcFdYc3BFcDFFdG1MdmlKZFJSbUlNUHlSV00ySG5yQnV5WUNpYnowbVE2ZEZpejRPY3VIMXh1SkdhV2kvU25IbTNxZUc0bXdoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYyNDk4NTE5OjkwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRkVDZRNUx4QXozTDVlYlBrY3pvSEV5REk2MjFCSVhNUHJUTUlUcFlxaHQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTYwMDQxMjR9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-rush-𝐌𝐃-𝐕11😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "rush-𝐌𝐃-𝐕11",
  ownername: process.env.OWNER_NAME || "rush",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
