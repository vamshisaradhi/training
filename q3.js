var _ = require("underscore");
function groupObjectsBy(jsonArray, keyString)
{
	let grouped = _.groupBy(jsonArray, jsonArray => jsonArray[keyString]);
	return grouped;
}

groupObjectsBy(jsonArray, 'channel');