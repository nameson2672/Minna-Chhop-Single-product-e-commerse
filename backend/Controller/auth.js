import User from '../models/UserModel.js';
import mailSender from '../Utils/mailSender.js'


// Public Route to create user and save it to database
export const createUser = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    
    if (user) {
        const userId = user._id;
        res.status(200).json({
            sucess: true,
            data: { _id: userId }
        });

        next();
    }
    if (!user) {
        // Create user and provide token for staying login
        const newUser = await User.create(req.body);

        // Send mail to user when account is created
        const userId = newUser._id;
        const options = {
            email: newUser.email,
            subject: 'Sign in from device',
            html: `Hey, ${newUser.name} you just join Minna chhop thats grate thakn you for sin up`
        }
        if (newUser) {
            mailSender(options);
        }
        res.status(200).json({
            sucess: true,
            data: { _id: userId }
            ,
        });
        next();
        
    }

}