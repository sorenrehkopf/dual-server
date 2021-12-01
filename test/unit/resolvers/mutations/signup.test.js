import bcrypt from 'bcrypt';
import models from 'models/index.js';
import signupResolver, { saltRounds } from 'resolvers/mutations/signup.js';

jest.mock('models')
jest.mock('bcrypt')
const jestUserCreate = models.User.create;
const jestUserFindOne = models.User.findOne;
const jestBcryptHash = bcrypt.hash;

const mockUser = {
	email: 'email@email.com',
	password: 'thepassword'
};
const mockHashedPass = 'themockhashedpass'

beforeAll(() => {
	jestUserCreate.mockResolvedValue(true)
	jestUserFindOne.mockResolvedValue(mockUser)
	jestBcryptHash.mockResolvedValue(mockHashedPass)
})

it('hashes the given password', async () => {
	await signupResolver(null, mockUser)

	expect(jestBcryptHash).toHaveBeenCalledWith(mockUser.password, saltRounds)
	expect(jestUserCreate).toHaveBeenCalledWith({
		...mockUser,
		password: mockHashedPass
	})
});

describe('when the user is created and found successfully', () => {
	test('it returns the user', async () => {
		expect(await signupResolver(null, mockUser)).toMatchObject(mockUser)
	})
})
