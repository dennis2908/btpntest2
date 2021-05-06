const env = {
  database: 'ddcai5jieddtkm',
  username: 'spiiayjyagmlxl',
  password: 'ac08bd7d898c3b650748aebe8bd822bc01ee3a000f7f38e2e786e2591b0a2e9e',
  host: 'ec2-54-170-100-209.eu-west-1.compute.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;