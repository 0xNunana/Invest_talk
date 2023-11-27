import Pusher from "pusher";
import ClientPusher from  'pusher-js'


//publish events to server
export const serverPusher = new Pusher({
    appId : "1715579",
key :'cb48e4bfb39ea15b071b',
secret : 'f7ecf69076f6dbb0edac',
cluster:"mt1"
})

//subscribe to events on client
export const clientPusher = new ClientPusher('cb48e4bfb39ea15b071b',{
    cluster:'mt1'
})