const axios = require('axios');
const { getUserInfo } = require('./testeNome');

jest.mock('axios');

describe('teste da função getUserInfo', () => {
  it('deve retornar as informações do usuário corretamente', async () => {
    const mockData = {
      name: 'Vitor Hosang',
      bio: 'Software Developer',
      avatar_url: 'https://avatars.githubusercontent.com/u/vhosang',
      public_repos: 10,
    };
    axios.get.mockResolvedValue({ data: mockData });
    const result = await getUserInfo('vhosang');
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/users/vhosang'
    );
  });
});