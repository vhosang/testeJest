const axios = require('axios');

async function getUserInfo(username) {
  try{
    const response = await axios.get(`https://api.github.com/users/${username}`);
   return response.data;
  } catch(error){
    throw new Error('Não foi possível obter o usuario a partir do git informado');
  };

  getUserInfo('vhosang')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));

   
  

//   return {
//     name: data.name,
//     bio: data.bio,
//     avatarUrl: data.avatar_url,
//     publicRepos: data.public_repos,
//   };
}

module.exports = {
    getUserInfo
  }