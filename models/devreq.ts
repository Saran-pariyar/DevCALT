import mongoose, {Schema} from "mongoose";

const devReqSchema = new Schema(
    {
        id: Number,
        title: String,
        description: String,
        // 21 nov 2023
        date_posted: String,

    },
    {
        timestamps: true,
      }
)

const DevReqCollection = mongoose.models.DevReqCollection || mongoose.model("DevReqCollection", devReqSchema);

export default DevReqCollection