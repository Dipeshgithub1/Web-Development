const express = require('express');
const zod = require('zod');

const app = express();

const healthCheckupSchema = zod.object({
    email: zod.string().email(),  // Adding email validation
    password: zod.string().min(8), // Password should be at least 8 characters
    country: zod.literal('IN').or(zod.literal('US')), // Country should be either "IN" or "US"
    kidneys: zod.array(zod.number()), // Array of numbers for kidneys
});

app.use(express.json());

app.post('/health-checkup', function(req, res) {
    const result = healthCheckupSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            msg: 'Input is invalid',
            errors: result.error.errors, // Returning validation errors
        });
    } else {
        return res.status(200).json({
            msg: 'Input is valid',
            data: result.data,
        });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
