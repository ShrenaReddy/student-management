
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let students = [
    { id: 1, name: "Rahul", age: 20, course: "CSE" },
    { id: 2, name: "Priya", age: 21, course: "ECE" }
];

// Display all students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// Add a new student
app.post('/api/students', (req, res) => {
    const { name, age, course } = req.body;

    if (!name || !Number.isInteger(age) || age <= 0 || !course) {
        return res.status(400).json({
            message: "Invalid student details"
        });
    }

    const student = {
        id: students.length > 0
            ? Math.max(...students.map(s => s.id)) + 1
            : 1,
        name,
        age,
        course
    };

    students.push(student);
    res.status(201).json(student);
});

// Search student by ID
app.get('/api/students/:id', (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// Delete a student
app.delete('/api/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
