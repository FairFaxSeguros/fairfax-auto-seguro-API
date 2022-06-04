/* eslint-disable no-console */
import app from './app.js';

app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening on port ${process.env.PORT} at ${process.env.NODE_ENV} mode`
  );
});