// studentController.js 
const Student = require('../models/student'); // Replace with the actual path to your Student model 
 
exports.createStudent = async (req, res) => { 
  try { 
    const studentData = req.body; 
    const newStudent = new Student(studentData); 
    await newStudent.save(); 
    res.status(201).json(newStudent); 
  } catch (error) { 
    res.status(500).json({ message: 'Error creating student', error: error.toString() }); 
  } 
}; 
 
exports.getStudents = async (req, res) => { 
  try { 
    const students = await Student.find({}); 
    res.json(students); 
  } catch (error) { 
    res.status(500).json({ message: 'Error fetching students', error: error.toString() }); 
  } 
}; 
 
exports.getStudentById = async (req, res) => { 
  try { 
    const studentId = req.params.id; 
    const student = await Student.findById(studentId); 
    if (!student) { 
      res.status(404).json({ message: 'Student not found' }); 
    } else { 
      res.json(student); 
    } 
  } catch (error) { 
    res.status(500).json({ message: 'Error fetching student by id', error: error.toString() }); 
  } 
}; 
 
exports.updateStudent = async (req, res) => { 
  try { 
    const studentId = req.params.id; 
    const updatedData = req.body; 
    const student = await Student.findByIdAndUpdate(studentId, updatedData, { new: true }); 
    if (!student) { 
      res.status(404).json({ message: 'Student not found' }); 
    } else { 
      res.json(student); 
    } 
  } catch (error) { 
    res.status(500).json({ message: 'Error updating student', error: error.toString() }); 
  } 
}; 
 
exports.deleteStudent = async (req, res) => { 
  try { 
    const studentId = req.params.id; 
    const deletedStudent = await Student.findByIdAndRemove(studentId); 
    if (!deletedStudent) { 
      res.status(404).json({ message: 'Student not found' }); 
    } else { 
      res.json({ message: 'Student deleted successfully' }); 
    } 
  } catch (error) { 
    res.status(500).json({ message: 'Error deleting student', error: error.toString() }); 
  } 
};