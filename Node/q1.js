var parser = require('xml2json');
var fs = require("fs");

XmlPArserHelper {
	parseXml(xmlData) {
		return parser.toJson(xmlData);
	}
}
xmlPArserHelper = new XmlPArserHelper();
var jsonData = xmlPArserHelper.parseXml(xmlData);

var jsonData = fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   return parser.toJson(data));
});