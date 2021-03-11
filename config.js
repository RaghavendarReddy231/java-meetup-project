var config = {};

config.email = {};
config.web = {};

/* Email configuration */
config.email.MAIL_DRIVER = "SMTP";
config.email.MAIL_HOST = "smtp.gmail.com";
config.email.MAIL_PORT = 465
config.email.MAIL_USERNAME = "cnu.prince8@gmail.com";
config.email.MAIL_PASSWORD = "9989303603";
config.email.MAIL_ENCRYPTION = "tls";
config.email.MAIL_SECURECONNECTION = true;
config.email.MAIL_FROM_ADDRESS = "no-replay@gmail.com";
config.web.port =  4000;

module.exports = config;