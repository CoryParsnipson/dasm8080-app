const dasm = require('8080dasm')
const IncomingForm = require('formidable').IncomingForm

module.exports = function upload(req, res) {
   var form = new IncomingForm();
   var dasm_files = {};

   form.on('file', (field, file) => {
      console.log(JSON.stringify(file));
      // run the disassembler
      // TODO: add support for streaming disassembly
      dasm_files[file.name] = dasm.disassemble(file.path);
   });

   form.on('end', () => {
      // send JSON response with disassembled instructions of all files
      res.send(dasm_files);
   });

   form.parse(req);
}
