class MetadataParser {
	constructor(version, channel, keyField) {
		this._version = version;
		this._channel = channel;
		this._keyField = keyField;
	}
	get version() {
		return this._version;
	}
	set version(newVersion) {
		this._version = newVersion;
	}
	get channel() {
		return this._channel;
	}
	set channel(newChannel) {
		this._channel =  newChannel;
	}
	get keyField() {
		return this._keyField;
	}
	set keyField(newKeyField) {
		this._keyField = newKeyField;
	}
	getKeyFields(jsonObjectArray) {
		let length = jsonObjectArray.length;
		let KeyFieldArray = [];
		for(let i = 0; i < length; i++)
		{
			KeyFieldArray.push(jsonObjectArray[i].keyField);
		}
		return KeyFieldArray;
	}
}

let metadataParser = new MetadataParser('version', 'channel', 'keyField');
let KeyFieldArray = metadataParser.getKeyFields(jsonObjectArray);
console.log(KeyFieldArray);


