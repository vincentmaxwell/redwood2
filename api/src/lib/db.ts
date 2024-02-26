// See https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/constructor
// for options.

import { PrismaClient } from '@prisma/client'

import { emitLogLevels, handlePrismaLogging } from '@redwoodjs/api/logger'

import { logger } from './logger'

/*
 * Instance of the Prisma Client
 */
export const db = new PrismaClient({
  log: emitLogLevels(['info', 'warn', 'error']),
})

handlePrismaLogging({
  db,
  logger,
  logLevels: ['info', 'warn', 'error'],
})

const CODESPACE_NAME = process.env.CODESPACE_NAME
const WEBSITE = `https://${CODESPACE_NAME}-8910.preview.app.github.dev`
const GRAPHQL_PLAYGROUND = `https://${CODESPACE_NAME}-8911.preview.app.github.dev/graphql`
const PRISMA_STUDIO = `https://${CODESPACE_NAME}-5555.preview.app.github.dev`

logger.info(`Website: ${WEBSITE}`)
logger.info(`Database Playground: ${GRAPHQL_PLAYGROUND}`)
logger.info(`Prisma Studio: ${PRISMA_STUDIO}`)
