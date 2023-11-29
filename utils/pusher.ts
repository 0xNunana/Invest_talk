import Pusher from "pusher";
import ClientPusher from  'pusher-js'


//publish events to server
export const serverPusher = new Pusher({
    appId : "1715579",
key :"process.env.PUSHER_KEY!",
secret : "process.env.PUSHER_SECRET!",
cluster:"mt1"
})

//subscribe to events on client
export const clientPusher = new ClientPusher("process.env.PUSHER_KEY!",{
    cluster:'mt1'
})