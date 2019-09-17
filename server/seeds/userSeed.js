module.exports = {
    run: async () => {
        let users = await MODELS.User.findAll()
        if (users.length == 0) {
            users = [
                {
                    email: 'john@gmail.com',
                    password: '123'
                },
                {
                    email: 'edward@gmail.com',
                    password: '789',
                    role: "ADMIN"
                }
            ];
            await MODELS.User.bulkCreate(users)
        }
    }
};
