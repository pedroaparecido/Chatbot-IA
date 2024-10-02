'use server'
import { IncomingMessage, ServerResponse } from 'http'
import mongoose from 'mongoose'
import { NextHandler } from 'next-connect'

export async function ConnectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
    } catch (err) {
        throw new Error(`ERRO ${err}`);
    }
};
