var redis = require('redis-url').connect(process.env.REDISCLOUD_URL);

module.exports = function(res) {
  return function(uploadRes) {
    redis.set(uploadRes.public_id, uploadRes.secure_url, function(err, reply) {
      if (err) return res.status(500).send('ERROR: Could not save code snippet URL');
      return res.send('/code/' + uploadRes.public_id);
    });
  };
};