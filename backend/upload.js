const IncomingForm = require('formidable').IncomingForm

module.exports = function upload(req, res) {
   var form = new IncomingForm();

   form.on('file', (field, file) => {
      // TODO: do something with this file
   });

   form.on('end', () => {
      res.json()
   });

   form.parse(req);
}
