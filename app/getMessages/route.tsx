// import { redis } from "@/utils/redis"
// import  {Message} from "@/utils/types"

// export async function GET(request:Request){
// //get the data from the label-messages in upsatsh
// const messageRes= await redis.hvals('messages')
// //recent one on top
// const messages:Message[]= messageRes.map((message)=>JSON.parse(message)).sort((a,b)=>b.created_at-a.created_at)

// //recent below
// //const messages:Message[]= messageRes.map((message)=>JSON.parse(message)).sort((a,b)=>b.created_at-a.created_at)
//     return Response.json(messages)
// }
import { redis } from "@/utils/redis";
import { Message } from "@/utils/types";

export async function GET(request: Request) {
  try {
    // Get the data from the 'messages' label in Upstash
    const messageRes = await redis.hvals('messages');

    // Parse and sort messages by the 'created_at' timestamp in descending order (most recent on top)
    const messages: Message[] = messageRes
      .map((message) => JSON.parse(message))
      .sort((a, b) => a.created_at - b.created_at);

    return Response.json({messages});
  } catch (error) {
    console.error('Error retrieving messages from Redis:', error);
    return Response.json({ error: 'Failed to retrieve messages' }, { status: 500 });
  }
}
