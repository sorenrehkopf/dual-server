import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import models from 'models/index.js';
import signupResolver, { saltRounds } from 'resolvers/mutations/signup.js';

jest.mock('models')
jest.mock('bcrypt')
jest.mock('jsonwebtoken')
const jestUserCreate = models.User.create;
const jestUserFindOne = models.User.findOne;
const jestBcryptHash = bcrypt.hash;
const jestJwtSign = jsonwebtoken.sign;

const mockUser = {
	email: 'email@email.com',
	password: 'thepassword'
};
const mockHashedPass = 'themockhashedpass'
const mockJwtAuthToken = 'atokenwooooow'

beforeAll(() => {
	jestUserCreate.mockResolvedValue(true)
	jestUserFindOne.mockResolvedValue(mockUser)
	jestBcryptHash.mockResolvedValue(mockHashedPass)
	jestJwtSign.mockResolvedValue(mockJwtAuthToken)
})

it('hashes the given password', async () => {
	await signupResolver(null, mockUser)

	expect(jestBcryptHash).toHaveBeenCalledWith(mockUser.password, saltRounds)
	expect(jestUserCreate).toHaveBeenCalledWith({
		...mockUser,
		password: mockHashedPass
	})
});

describe('when the user is created successfully', () => {
	test('it returns the hashed email', async () => {
		expect(await signupResolver(null, mockUser)).toMatchObject({ token: mockJwtAuthToken })
	})
})
