import { redis } from "@/utils/redis"
import  {Message} from "@/utils/types"

export async function GET(request:Request){
//get the data from the label-messages in upsatsh
const messageRes= await redis.hvals('messages')
const messages:Message[]= messageRes.map((message)=>JSON.parse(message))
    return Response.json({messages})
}