const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = (done) => {
	new User.model({
		name: 'Katiana',
		email: 'fotografiakat@gmail.com',
		password: 'fotoscomamor',
		canAccessKeystone: true,
	}).save(done);
};
