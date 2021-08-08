import * as exercises from './exercises_model.mjs';
import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

/**
 * Routes
 */

// POST request
app.post('/exercises', (req, res) => {
  exercises
    .addExercise(
      req.body.name,
      req.body.reps,
      req.body.weight,
      req.body.unit,
      req.body.date
    )
    .then((exercise) => {
      res.status(201).json(exercise);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ Error: 'Request Failed' });
    });
});

// GET request
app.get('/exercises', (req, res) => {
  exercises
    .findExercises({}, '', 0)
    .then((exercises) => {
      res.status(200).json(exercises);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ Error: 'Request Failed' });
    });
});

// GET request with :id parameter
app.get('/exercises/:id', (req, res) => {
  exercises
    .findExerciseById(req.params.id)
    .then((exercise) => {
      if (exercise !== null) {
        res.status(200).json(exercise);
      } else {
        res.status(500).json({ Error: 'Resource Not Found' });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ Error: 'Request Failed' });
    });
});

// PUT request with :id parameter
app.put('/exercises/:id', (req, res) => {
  exercises
    .updateById(
      req.params.id,
      req.body.name,
      req.body.reps,
      req.body.weight,
      req.body.unit,
      req.body.date
    )
    .then((numUpdated) => {
      if (numUpdated === 1) {
        res.status(200).json({
          _id: req.params.id,
          name: req.body.name,
          reps: req.body.reps,
          weight: req.body.weight,
          unit: req.body.unit,
          date: req.body.date,
        });
      } else {
        res.status(500).json({ Error: 'Resource Not Found' });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ Error: 'Request Failed' });
    });
});

// DELETE request with :id parameter
app.delete('/exercises/:id', (req, res) => {
  exercises
    .deleteById(req.params.id)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        res.status(204).send();
      } else {
        res.status(500).json({ Error: 'Resource Not Found' });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ Error: 'Request Failed' });
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
