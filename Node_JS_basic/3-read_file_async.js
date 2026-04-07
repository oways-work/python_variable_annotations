const fs = require('fs');

/**
 * Reads a database file asynchronously and logs statistics.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length > 0) {
        lines.shift(); // Remove the header
      }

      let result = `Number of students: ${lines.length}\n`;
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
          const msg = `Number of students in ${field}: ${fields[field].length}. List: ${list}`;
          console.log(msg);
          result += `${msg}\n`;
        }
      }
      resolve(result.trim());
    });
  });
}

module.exports = countStudents;
