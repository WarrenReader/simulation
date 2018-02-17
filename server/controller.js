module.exports = {
  getShelf: (req, res, next) => {
    const db = req.app.get('db');
    const {shelfLetter} = req.params;

    db.readShelf([`%${shelfLetter.toUpperCase()}%`]).then(shelf =>{
      res.status(200).send(shelf);
    });
  },

  getRow: (req, res, next) => {
    const db = req.app.get('db');
    const {rowId} = req.params;

    db.readRow([`%${rowId}%`]).then(row =>{
      res.status(200).send(row);
    });
  }
  
}


