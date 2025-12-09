import logger from 'pino';

const log = logger({
  baseL: {pid: false},
  transport: {
    target: 'pino-pretty',
    options: {
      colorized: true
    }
  },
  timestamp: ()=> `,"time": "${new Date().toLocaleString()}"`

});

export default log;