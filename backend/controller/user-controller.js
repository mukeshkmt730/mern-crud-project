import user from '../model/user-schema.js'


export const getUsers = async (req, res) => {
    try {
        const Users = await user.find();
        res.json(Users);
    } catch (e) {
        res.json({ message: e.message })
    }
}

export const addUser = async (req, res) => {
    const User = req.body;
    const newUser = new user(User);
    try {
        await newUser.save();
        res.json(newUser);
    } catch (e) {
        res.json({ message: e.message })
    }
}


export const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const User = await user.findById(id);
        res.json(User);
    } catch (e) {
        res.json({ message: e.message })
    }
}

export const editUser = async (req, res) => {
    const id = req.params.id;
    const usr = req.body;
    const edituser = new user(usr);
    try {
        //    const User=await user.findByIdAndUpdate(id);
        const User = await user.updateOne({ _id: id }, edituser)
        res.json(User);
    } catch (e) {
        res.json({ message: e.message })
    }
}

export const deleteUser= async (req, res) => {
    const id = req.params.id;
    try {
        const User = await user.findByIdAndDelete(id);
        res.json(User);
    } catch (e) {
        res.json({ message: e.message })
    }
}