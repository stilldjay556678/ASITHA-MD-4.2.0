const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=OjBlxYjQ#bx5bmOxsEF15MvnDYyNuBe8TggzsaB-2KstJeA6Ynb8' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "𝙏𝞖𝞢 𝞛𝞓𝙎𝙏𝞢𝞒" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'https://files.catbox.moe/pkrc1m.jpg' : process.env.POSTGRESQL_URL,
};
