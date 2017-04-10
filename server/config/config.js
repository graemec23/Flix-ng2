const Config = {
  test: {
    
  },
  development: {
    netflixCatgories: {
      fetchUrl: 'http://whatsonnetflix.com/netflix-hacks/the-netflix-id-bible-every-category-on-netflix/',
      jsonPath: '../api/categories.json',
    },
    port: process.env.PORT || 9999,
  }
};

const getConfigByEnv = () => {
  const env = process.env.NODE_ENV || 'development';
  return Config[env];
};

Config.getConfigByEnv = getConfigByEnv;
export default Config;