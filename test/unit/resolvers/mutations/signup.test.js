import models from 'models/index.js';
import signupResolver from 'resolvers/mutations/signup.js';

jest.mock('models')
const jestUserCreate = models.User.create;
const jestUserFindOne = models.User.findOne;

describe('when the user is created and found successfully', () => {
	const mockUser = { email: 'email@email.com' }

	beforeAll(() => {
		jestUserCreate.mockResolvedValue(true)
		jestUserFindOne.mockResolvedValue(mockUser)
	})

	test('it returns the user', async () => {
		expect(await signupResolver(null, mockUser)).toMatchObject(mockUser)
	})
})
