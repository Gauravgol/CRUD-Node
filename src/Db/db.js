
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const dbUrl = process.env.DBURL
        const conn = await mongoose.connect(process.env.DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`DB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
