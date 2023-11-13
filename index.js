const express = require("express");
const app = express();
const url = require("url");
const port = 10000;

const hash = {};

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/v1/hash", (req, res) => {
	const { key, value } = req.query;

	hash[key] = value;
	res.status(201).send(
		`Saved a new hash with key: ${key}  and value: ${value}`
	);
});

app.get("/v1/hash/:key", (req, res) => {
	const { key } = req.params;
	const value = hash[key];
	if (!value) {
		res.status(404).send(`No hash found with key: ${key}`);
	}

	res.status(200).send(value);
});
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
