import { config } from 'dotenv'
config()

export const env = Object.freeze({
  port: Number(process.env.PORT) || 3000
})