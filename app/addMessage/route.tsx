import { serverPusher } from "@/utils/pusher";
import { redis } from "@/utils/redis";

export async function POST(request: Request) {
    const {message}=await request.json();
    const newMessage={
    ...message,

    //replace the user timesatmp with server
    created_at:Date.now()
    }
//label - messages
//key - message.id
//value - JSON.stringify(newmessage)
await redis.hset('messages',message.id,JSON.stringify(newMessage))

//push newmessage to Pusher to be be listened to
//channel-messages
//event-'new-message
//data-newmessage
await serverPusher.trigger("messages","new-message",{message:newMessage})

    return Response.json({message:newMessage})
}