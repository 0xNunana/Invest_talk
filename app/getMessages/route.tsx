import { redis } from "@/utils/redis"
import  {Message} from "@/utils/types"

export async function GET(request:Request){
//get the data from the label-messages in upsatsh
const messageRes= await redis.hvals('messages')
//recent one on top
const messages:Message[]= messageRes.map((message)=>JSON.parse(message)).sort((a,b)=>b.created_at-a.created_at)

//recent below
//const messages:Message[]= messageRes.map((message)=>JSON.parse(message)).sort((a,b)=>b.created_at-a.created_at)
    return Response.json({message:messages})
}