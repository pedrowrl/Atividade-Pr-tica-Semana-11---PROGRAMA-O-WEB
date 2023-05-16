// Aluno: Pedro Wilson Rodrigues de Lima.
// Nº de Matrícula: 2020267.

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

class DataController {
  static getAllData(req, res) {
    res.json(simpsonsData);
  }

  static createData(req, res) {
    const inputData = req.body;
    res.json({ inputs: inputData });
  }

  static updateData(req, res) {
    const id = req.params.id;
    const updatedData = req.body;
    res.json({ message: `Data with ID ${id} has been updated` });
  }

  static deleteData(req, res) {
    const id = req.params.id;
    res.json({ message: `Data with ID ${id} has been deleted` });
  }
}

class DataModel {
  static getSimpsonsData() {
    return [
      { personagem: 'Homer Simpson', ocupação: 'Inspetor irresponsavel da Usina Nuclear de Springfield' },
      { personagem: 'Marge Simpson', ocupação: 'Dona de Casa' },
      { personagem: 'Bart Simpson', ocupação: 'Estudante ruim' },
      { personagem: 'Lisa Simpson', ocupação: 'Estudante genial' },
      { personagem: 'Maggie Simpson', ocupação: 'Bebê' }
    ];
  }
}

app.get('/data', DataController.getAllData);
app.post('/data', DataController.createData);
app.put('/data/:id', DataController.updateData);
app.delete('/data/:id', DataController.deleteData);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
