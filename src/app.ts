import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Teste',
    email: 'teste@teste.com',
  },
})

export const app = fastify()
