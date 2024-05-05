import app from "./app";
import { connectDB } from "./db";

const PORT = process.env.PORT || 3001;


(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})();


