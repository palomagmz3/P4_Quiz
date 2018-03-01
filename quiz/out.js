
const figlet = require ('figlet');
const chalk = require ('chalk');


/** 
 * Dar color a un string
 */
const colorize = (msg, color) => {
	if (typeof color !== "undefined"){
		msg = chalk[color].bold(msg);
	}
	return msg;
};

/** 
 * Escribe un mensaje de log
 * msg es el String a escribir y color es el color del texto
 */
const log = (msg, color) => {
	console.log(colorize(msg, color));
};

 /** 
 * Escribe un mensaje de la funcion log anterior pero en grande
 * msd es el texto a escribir y color es el color del texto
 */
const biglog = (msg, color) => {
	log(figlet.textSync(msg, { horizontalLayout: 'full' }), color);
};

/** 
 * Escribe el mensaje de error emsg que le pasamos
 */
const errorlog = (emsg) => {
	console.log(`${colorize("Error", "red")}: ${colorize(colorize(emsg, "red"), "bgYellowBright")}`);
}


exports = module.exports = {
	colorize,
	log,
	biglog,
	errorlog
};