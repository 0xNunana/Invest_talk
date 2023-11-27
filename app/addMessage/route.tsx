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

    return Response.json({message:newMessage})
}