const nodemailer = require('nodemailer');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'carlosalvmtz@gmail.com', // Cambialo por tu email
 pass: 'juancarlos1999*' // Cambialo por tu password
 }
 });
const mailOptions = {
 from: `”jachi@gmail.com” <${formulario.email}>`,
 to: 'carlosalvmtz@hotmail.com', // Cambia esta parte por el destinatario
 subject: "datos de JACHI",
 html: `
 <strong>Pagina solicitada:</strong> ${formulario['id']} <br/>
 <strong>Puntaje sengun google:</strong> ${formulario['lighthouseResult']['categories']['performance']['score']} <br/>
 <strong>Tiempo en cargar pagina (ms):</strong> ${formulario['lighthouseResult']['timing']['total']} <br/>
 <strong>Puntaje benchmark de tu pagina: </strong> ${formulario['lighthouseResult']['environment']['benchmarkIndex']} <br/>
 <strong>El tiempo que se tardo en iniciar el servicio de tu pagina fue de: </strong> ${formulario['lighthouseResult']['audits']['bootup-time']['displayValue']} <br/>
 <strong>Puntaje de inicio de pagina: </strong> ${formulario['lighthouseResult']['audits']['bootup-time']['score']} <br/>
 <strong>El tiempo que se tarda en hacer la primer impresion fue de : </strong> ${formulario['lighthouseResult']['audits']['first-contentful-paint']['displayValue']} <br/>
 <strong>El speed index es de : </strong> ${formulario['lighthouseResult']['audits']['speed-index']['displayValue']} <br/>
 <strong>El puntaje de  speed index es de : </strong> ${formulario['lighthouseResult']['audits']['speed-index']['score']} <br/>
<strong>Recuerda que el puntaje mas alto posible es 1</strong>
 
 

 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}