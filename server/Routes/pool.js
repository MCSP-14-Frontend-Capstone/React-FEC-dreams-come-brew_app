const {Pool} = require('pg');
// require('dotenv').config()


// const connectionString = process.env.DATABASE_URL

const connectionString = 'postgres://mcsp14:c4FMGz1v2iStMQE5i351w5jrZaSEDSG5@dpg-cd84p76n6mpnkghcq43g-a.oregon-postgres.render.com/dreams_come_brew_db_ucut?ssl=true'

const pool = new Pool ({
    connectionString
});

module.exports = pool