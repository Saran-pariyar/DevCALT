import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        name: String,
        email: String,
        bio: String,
        about: String,
        social:{
            linkedin:String,
            twitter: String,
            github: String
        },
    },
    {
        timestamps: true,
      }
)

const User = mongoose.models.UserCollection || mongoose.model("UserCollection", userSchema);

export default User;