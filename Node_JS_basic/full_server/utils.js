import fs from 'fs';

/**
 * Reads the database asynchronously.
 * @param {string} filePath - Path to the CSV file.
 * @returns {Promise} Resolves with an object of arrays of first names per field.
 */
export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length > 0) {
        lines.shift(); // Remove the header
      }

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

      resolve(fields);
    });
  });
}
