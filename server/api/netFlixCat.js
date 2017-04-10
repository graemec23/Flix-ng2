import fs from 'fs';
import cheerio from 'cheerio';
import request from 'request';
import path from 'path';

import config from '../config/config';
const serverConfig = config.getConfigByEnv();
const url = path.join(__dirname, serverConfig.netflixCatgories.jsonPath);


const loadNetFlixList = (req, res) => {
  
  let categoryList = fs.readFileSync(url,  'utf-8', (err) => {
    if (err) throw err;
  });
  
  return categoryList;
};


const storeCategories = (tokenPath, token, expiry) => {
  try {
    fs.mkdirSync('./');
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }

  fs.writeFile(tokenPath, JSON.stringify(tokenObj), 'utf-8', (err) => {
    if (err) throw err;
  });
};



const scrapeNetFlixList = (req, res) => {
  request(serverConfig.netflixCatgories.fetchUrl, function(err, response, html) {
    let $ = cheerio.load(html);
    let categoryList = [];
    $('div.wpb_wrapper').children('p:contains(" = ")').each(function(i, e) {
      let data = {
        id: $(this).text().split(' = ')[0],
        title: $(this).text().split(' = ')[1],
      };
      console.log(data)
      categoryList.push(data);
    });
// console.log(categoryList)
    return categoryList;
  });
}

export { loadNetFlixList, scrapeNetFlixList, storeCategories};
