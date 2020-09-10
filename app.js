require('dotenv').config()
const config = require('./config/config.js');

const PORT = process.env.PORT || 3000
const app = config.setUpServer()

app.listen(PORT, () => {
    console.log(`TIVITaskList rodando na porta ${PORT}!`)
})