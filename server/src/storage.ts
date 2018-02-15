import {User, IUser} from './models/models';


export const dbSaveUser = async (user: Partial<IUser>) => {
/*    if (users.some(existing => existing.username === user.username)) {
        throw new Error('Username already exists');
    }*/

    var user_new = new User(user);

    return await user_new.save()
};

export const dbGetUser = async (email: string) => {
    User.findOne({email: email}).exec(function (err, result) {
        if(result) {
            return result;
        }

        throw new Error('Account not exist');

    });
};

export const dbUpdateUser = async (email: string, userUpdate: Partial<IUser>) => {
/*    const existingUser = await dbGetUser(username);
    if (!existingUser) {
        throw new Error('User was not found');
    }*/

    var to_update =  await dbUserExists('email', email);
    to_update.set(userUpdate);
    return await to_update.save();
};


export const dbGetUserByField = async (field: any, value: any) => {
    User.find({field: value}).exec(function (err, result) {
        if(result) {
            return result;
        }

        throw new Error('Account not exist');

    });
};

export const dbUserExists = async (field: keyof IUser, value: String) => {
    var find = {};
    find[field] = value;
    return await User.findOne(find).exec()
};