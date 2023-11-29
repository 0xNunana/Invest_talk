// import { serverPusher } from "@/utils/pusher";
// import { redis } from "@/utils/redis";

// export async function POST(request: Request) {
//     const {message}=await request.json();
//     const newMessage={
//     ...message,

//     //replace the user timesatmp with server
//     created_at:Date.now()
//     }
// //label - messages
// //key - message.id
// //value - JSON.stringify(newmessage)
// await redis.hset('messages',message.id,JSON.stringify(newMessage))

// //push newmessage to Pusher to be be listened to
// //channel-messages
// //event-'new-message
// //data-newmessage
// await serverPusher.trigger("messages","new-message",newMessage)

//     return Response.json({newMessage})
// }
import { serverPusher } from "@/utils/pusher";
import { redis } from "@/utils/redis";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Replace the user timestamp with the server timestamp
    const newMessage = {
      ...message,
      created_at: Date.now(),
    };

    // Label - 'messages', Key - message.id, Value - JSON.stringify(newMessage)
    await redis.hset('messages', message.id, JSON.stringify(newMessage));

    // Push new message to Pusher to be listened to
    // Channel - 'messages', Event - 'new-message', Data - newMessage
    await serverPusher.trigger("messages", "new-message", newMessage);

    return Response.json({ newMessage });
  } catch (error) {
    console.error('Error processing the POST request:', error);
    return Response.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}
