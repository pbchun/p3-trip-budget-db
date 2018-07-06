module.exports = {

  development: {
    client: 'pg',
    connection: 'postsql://localhost/trip-budget-db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}