import mongoose from 'mongoose';

// Prep database
mongoose.connect('mongodb://localhost:27017/exercisesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to db
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to exercisesDB on port 27017');
});

// Create indices
mongoose.set('useCreateIndex', true);

// Exercise Schema
const exerciseSchema = mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: String, required: true },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

/**
 * CRUD Operations for Exercises
 */

// Create document
const addExercise = async (name, reps, weight, unit, date) => {
  const exercise = new Exercise({
    name: name,
    reps: reps,
    weight: weight,
    unit: unit,
    date: date,
  });
  return exercise.save();
};

// Find All
const findExercises = async (filter, projection, limit) => {
  const query = Exercise.find(filter).select(projection).limit(limit);
  return query.exec();
};

// Find By Id
const findExerciseById = async (id) => {
  const query = Exercise.findById(id);
  return query.exec();
};

// Update Exercise by Id
const updateById = async (id, name, reps, weight, unit, date) => {
  const result = await Exercise.updateOne(
    { _id: id },
    { name: name, reps: reps, weight: weight, unit: unit, date: date },
    { omitUndefined: true }
  );
  if (result.n === 0) {
    throw 'Not Found';
  } else {
    return result.nModified;
  }
};

// Delete by Id
const deleteById = async (id) => {
  const result = await Exercise.deleteOne({ _id: id });
  return result.deletedCount;
};

export { addExercise, findExercises, findExerciseById, updateById, deleteById };
