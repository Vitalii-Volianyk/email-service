const express = require("express");
const cors = require("cors");
require("dotenv").config();
const {sendEmail} = require("./emails.js");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/sendemail", async (req, res) => {
	const {to, subject, html} = req.body;
	await sendEmail({to, subject, html});
	res.status(200).json({message: "Email sent"});
});

app.use((_, res, __) => {
	res.status(404).json({
		status: "error",
		code: 404,
		message: "Not found",
		data: "Not found",
	});
});

app.listen(3000, function () {
	console.log(`Server running. Use our API on port: ${3000}`);
});
