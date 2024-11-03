const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349126533339";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_19_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNixcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUwLFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDYyLFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSREppVFRQRGtCcEVxV053cDlhb0JHK0JOc2k1Vm0zRG9jR3RxY2tkVmVZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoQXRhUVRSS1FocWdWQUM2cU1VU1RBXCIsXG4gIFwicGhvbmVJZFwiOiBcImViNTliYzZiLTEyN2MtNGQ3YS05NzJhLWZlZTY4NjhlMTc4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MixcbiAgICAgIDM5LFxuICAgICAgMjMwLFxuICAgICAgOSxcbiAgICAgIDIwOCxcbiAgICAgIDI1NSxcbiAgICAgIDIyNCxcbiAgICAgIDc3LFxuICAgICAgMTIsXG4gICAgICAxMzksXG4gICAgICA0MCxcbiAgICAgIDYwLFxuICAgICAgMjI1LFxuICAgICAgODksXG4gICAgICAxODEsXG4gICAgICA0NyxcbiAgICAgIDIzNSxcbiAgICAgIDc1LFxuICAgICAgMTYsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMTM0LFxuICAgICAgMTcyLFxuICAgICAgOCxcbiAgICAgIDIzNSxcbiAgICAgIDgsXG4gICAgICAxMDUsXG4gICAgICAyNDQsXG4gICAgICAyMzgsXG4gICAgICAxNjAsXG4gICAgICAxNzIsXG4gICAgICAxNTEsXG4gICAgICAyMDAsXG4gICAgICAxNDcsXG4gICAgICAxNTksXG4gICAgICAxMzcsXG4gICAgICAxMjIsXG4gICAgICAxOCxcbiAgICAgIDk0LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkZZNEY0MkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjY1MzMzMzk6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQxMzYwMzAwOTU3Nzg3OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2pNZ1U4UXJabWZ1UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxQUZia2ZPRklpeWFSR0d1TDRSclI5MkRQa3JqL0pSNVdJMlVkdVdnbTBNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNIYlAyb3AvdTNFa1RJSWZDaU55OWU3cVBkYU5QQjg5SFlHcFdYYko2cnM5WlJ5ODhaYkxvQ2lPVklPcjJPaS90cmpqYVd5WDlNVTZxVmpJYm54UkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpxM2lJaDhuT2dkVTlmazN6VFZHSEZraU1tWjBtQU1DNHk2dzAvQW9FRHBOV1pjQXBYMEt5UHpMK3Vnem0yWjBPTEtOZm02VlJoNlk3Ym9IemFsbmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjY1MzMzMzk6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjYxNTU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSElhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFUy9jODdlcGNEVWlPUHA1ZUY1TEl1Sms5b2dVblQ0NlR5SUxaYzVOaXRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTcwMTE1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
