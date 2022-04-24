'use strict';
const QRCode = require('qrcode')
module.exports.qrgen = async (event) => {
  if (!event.queryStringParameters) return { statusCode: 200, body: JSON.stringify( {message: "Informe a query no formato '?toqrcode=O que dejeja transformar em qrcode'",}, null, 2)  };

  const { toqrcode } = event.queryStringParameters;

  if (!toqrcode) return { statusCode: 200, body: JSON.stringify( {message: "Params vazio",}, null, 2)  };

  const qrCoded = await QRCode.toDataURL(toqrcode)
  .then(url => {
    return url
  })
  .catch(err => {
    return err
  });

  return { statusCode: 200, body: JSON.stringify( {message: qrCoded,}, null, 2)  };
};
