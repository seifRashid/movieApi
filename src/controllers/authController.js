
const register = async (req, res) => {
    try {
        // Extract user data from the request body
        const { name, email, password } = req.body;
        // Validate the input data (you can add more validation as needed)
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // Check if the user already exists in the database
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        // Hash the password before saving (you can use bcrypt or any hashing library)
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user in the database
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        // Respond with the created user (you can exclude the password from the response)
        res.status(201).json({ user: { id: newUser.id, name: newUser.name, email: newUser.email } });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { register };