const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://suraj-portfolio2.herokuapp.com/' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://suraj-portfolio2.herokuapp.com/',
  'process.env.CLIENT_ID': 'vGj2n3onRn8x1q3ArEkhOqdideJAwfig'
}
