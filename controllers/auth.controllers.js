const { addUser, checkUserByEmail } = require("../services/users.service");
const argon = require("argon2");
const jwt = require("jsonwebtoken");

async function register(req, res) {
    try {
        const { phone, email, password } = req.body;

        const hashedPassword = await argon.hash(password);
        const newId = await addUser(phone, hashedPassword, email);
        if (!newId) {
            return res.status(500).json({
                message: "Server loi",
            });
        }
        res.status(201).json({
            message: "Dang ky thanh cong",
        });
    } catch (error) {
        console.log(error);
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const findUser = await checkUserByEmail(email);
        if (!findUser) {
            return res.status(400).json({ message: "Email khong ton tai" });
        }
        const checkPassowrd = await argon.verify(findUser.password, password);
        if (!checkPassowrd) {
            return res.status(400).json({ message: "Sai mat khau" });
        }
        if (findUser.status == 0) {
            return res.status(400).json({ message: "Tai khoan bi khoa" });
        }
        const token = jwt.sign(
            { id: findUser.id, role: findUser.role },
            "MABIMATJWT"
        );
        res.status(200).json({
            message: "Dang nhap thanh cong",
            token,
            user: {
                id: findUser.id,
                role: findUser.role,
                status: findUser.status,
            }
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    register,
    login,
};