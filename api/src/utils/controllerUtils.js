const { statusCode } = require("../utils/enums");

const CustomResponse = (res, status, success, mensagens, data = []) => {
  const messagesArray = Array.isArray(mensagens) ? mensagens : [mensagens];
  const dataArray = Array.isArray(data) ? data : [data];

  res
    .status(status)
    .json({ success, messages: messagesArray, data: dataArray });
};

const TratarErros = (error, res) => {
  var erros;
  if (error?.name == "SequelizeValidationError") {
    erros = error.errors.map((m) => m.message);
  } else {
    erros = [error.message];
  }
  CustomResponse(res, statusCode.INTERNALERROR, false, erros);
};

module.exports = { CustomResponse, TratarErros };
