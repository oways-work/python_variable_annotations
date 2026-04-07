const fs = require('fs');

/**
 * Reads a database file synchronously and logs statistics.
 * @param {string} path - Path to the CSV file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length > 0) {
      lines.shift(); // Remove the header
    }

    console.log(`Number of students: ${lines.length}`);

    const fields = {};
    for (const line of lines) {
      const student = line.split(',');
      const field = student[3];
      const firstname = student[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
