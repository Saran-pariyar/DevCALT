import connectMongoDB from "@/libs/mongodb";
// import Topic from "@/models/topic";
import DevReqCollection from "@/models/devreq";
import { NextResponse } from "next/server";


// get list of all dev req
export async function GET(){
    await connectMongoDB();
 const devreq =    await DevReqCollection.find();
 return NextResponse.json({devreq})
}