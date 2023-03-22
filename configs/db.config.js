module.exports = {
    development: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "Welcome1",
        DB: "ecom_db",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acuire: 30000, //max time in ms that a pool will try to get connection before throwing error
            idle: 10000  // maximum time in ms that a connection can be idle before being released
        }
    },
    test: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "root",
        DB: "ecom_test_db",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acuire: 30000, //max time in ms that a pool will try to get connection before throwing error
            idle: 10000  // maximum time in ms that a connection can be idle before being released
        }
    },
    production: {
        HOST:"sql12.freemysqlhosting.net",
        USER:"sql12607558",
        PASSWORD:"6pgx4PCmL2",
        DB:"sql12607558",
        dialect:"mysql"
    }
}