import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Markus',
        email: 'Markus@example',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Maria',
        email: 'Maria@example',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;