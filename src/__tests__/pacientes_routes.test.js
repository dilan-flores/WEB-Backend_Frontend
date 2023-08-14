import axios from 'axios';

describe('GET /pacientes', () => {
it('should return a list of patients', async () => {
const response = await axios.get('http://localhost:3000/pacientes');
expect(response.status).toBe(200);
expect(response.data).toEqual(/* expected response */);
});
});
