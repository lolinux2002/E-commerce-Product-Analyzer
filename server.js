import express from 'express';
    import cors from 'cors';

    const app = express();
    const port = 3001;

    // Middleware
    app.use(cors());
    app.use(express.json());

    // POST endpoint
    app.post('/api/data', (req, res) => {
      console.log('Received data:', req.body);
      res.json({
        status: 'success',
        message: 'Data received',
        data: req.body
      });
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
