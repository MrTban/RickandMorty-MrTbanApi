const sendNotFound = (res) => {
	res.writeHead(404, { 'Content-Type': 'text/plain' });
	res.end('Route not found');
};

module.exports = { sendNotFound };
