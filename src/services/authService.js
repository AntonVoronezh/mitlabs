export default class AuthService {
	tryLogin(username, password) {
		const data = () => {
			if (username === 'aa' && password === '11') {
				return {
					status: 'ok',
					token: 'fbdfbsdfdfAsd9995-CVXVBXV9',
					user: {
						name: 'MITLabs',
					},
				};
			} else {
				return {
					status: 'err',
					message: 'wrong_email_or_password',
				};
			}
		};

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.8) {
					reject(new Error('Network Error'));
				} else {
					resolve(data());
				}
			}, 1200);
		});
	}
}
