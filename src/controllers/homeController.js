const fs = require('fs');
const quiz_file = './src/assets/quiz.json'
module.exports = {
    status: (req, res) => {
        res.status(200).send({ result: "Okay" });
    },
    version: (req, res) => {

        try {
            const data = fs.readFileSync(quiz_file, 'utf8');
            const jdata = JSON.parse(data)
            console.log('File content:', jdata["version"]);
            res.status(200).send({ version: jdata["version"] });
        } catch (err) {
            console.error('Error reading file:', err);
        }
    },
    quiz: (req, res) => {
       
        res.status(200).sendfile(quiz_file)

    }
}