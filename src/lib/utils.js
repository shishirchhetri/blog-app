const { default: mongoose } = require('mongoose');

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection!');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URL);
    connection.isConnected = db.connections[0].readystate;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const formatDate = (date) => {
  const options = { month: 'short', day: 'numeric' };
  const formattedDate = new Date(date).toLocaleString('en-US', options);
  const year = new Date(date).getFullYear();
  return `${formattedDate}, ${year}`;
};
