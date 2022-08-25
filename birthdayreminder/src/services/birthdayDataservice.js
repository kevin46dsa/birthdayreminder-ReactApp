import axios from 'axios';
import authHeader from './auth-header';
import config from '../Config/envVariables';
const API_URL = `${config.Server_url}users`;
//const Public_URL = `${config.Server_url}/public`;

const getBirthday = () => {
	return axios
		.get(API_URL + '/checkbirthday', { headers: authHeader() })
		.then((response) => {
			return response.data.data[0];
		});
};

const BirthdayService = {
	getBirthday,
};
export default BirthdayService;
