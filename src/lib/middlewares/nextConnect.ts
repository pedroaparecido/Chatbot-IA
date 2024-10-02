import { createRouter } from 'next-connect'
import MongoDB from './mongodb'

export default function handlerDB() {
    console.log('connected')
    return createRouter().use(MongoDB)
}