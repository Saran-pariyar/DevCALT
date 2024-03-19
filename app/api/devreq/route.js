
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import DevReqCollection from "@/models/devreq";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


// get list of all dev req

export async function GET(){
    await connectMongoDB();
 const devreq =    await DevReqCollection.find();
 return NextResponse.json({devreq})
}

// export async function POST(request){

//     const {user_id, title, description} = await request.json();
//     await connectMongoDB();
//     await DevReqCollection.create({user_id, title, description});
//     return NextResponse.json({message: "Devreq collection created"}, {status:201})
// }

