import mongoose from 'mongoose'

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/miw_yuka', {useNewUrlParser: true,autoReconnect: true})
}
export let db


export default () => {
    return new Promise((resolve, reject) => {

        db = mongoose.connection

        db.on('connecting', () => {
            console.log('connection a mongo')
        })
        db.on('error', (error) => {
            mongoose.disconnect()
            reject(error)
            throw new Error('database error')
        })
        db.once('open', () => {
            console.log('connecte a mongo')
            resolve();
        })
        db.on('disconnected', () => {
            setTimeout(() => {
                try {
                    connect()
                } catch (error) {
                    throw new Error('cannot Reconnect')
                }
            }, 5000)
        })
        connect()
    })
}