const app = require("./src/app.js");
const PORT = process.env.PORT;
const { conn } = require('./src/db.js');

//alter - force
conn.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening ...`);
    })
    }).catch(error => console.error(error))
    