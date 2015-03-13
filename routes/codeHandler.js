var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');
var uploadHandler = require('../lib/uploadHandler');
var stream = require('stream');
var redis = require('redis-url').connect(process.env.REDISCLOUD_URL);
var request = require('superagent');

router.post('/', function(req, res) {
  if (!req.body || !req.body.code) return res.status(400).send('ERROR: No content passed in POST /code');
  var cloudinaryStream = cloudinary.uploader.upload_stream(uploadHandler(res), { resource_type: "raw" });
  var s = new stream.Readable();
  s._read = function noop() {};
  s.push(req.body.code);
  s.push(null);
  s.pipe(cloudinaryStream);
});

router.get('/', function(req, res) {
  return res.status(400).send('ERROR: Cannot GET at /code');
});

router.get('/:id', function(req, res) {
  if (!req.params.id) return res.status(400).send('ERROR: No ID passed to /code/{id}');
  redis.get(req.params.id, function(err, data) {
    if (err) return res.status(500).send('ERROR: Redis failed to retrieve your data');
    if (!data) return res.sendStatus(404);
    return request.get(data).pipe(res);
  });
});

module.exports = router;
