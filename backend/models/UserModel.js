import mongoose from 'mongoose';


const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    givenName: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false,

    }
})

const User = mongoose.model('user', UserSchema);
export default User;