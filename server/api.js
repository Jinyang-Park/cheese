const axios = require('axios');
// import axios from 'axios';
// import { Cheerio } from 'cheerio';
// import cheerio from 'cheerio';
const cheerio = require('cheerio');

const getHTML = async () => {
  try {
    return await axios.get(
      'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%B9%98%EC%A6%88%EB%B3%B8'
    );
  } catch (error) {
    console.log(error);
  }
};

// 파싱
const parsing = async () => {
  // 위에서 추출한 HTML 전체 가져오기
  const html = await getHTML();
  // JQuery처럼 사용하기 위해 '$'에 cheerio를 로드한다.
  const $ = cheerio.load(html.data);

  let dataArr = [];
  const $cheesebon = $('#place-main-section-root > section > div > div ');

  $cheesebon.each((idx, node) => {
    const Title = $(node).find('.Fc1rA').text();

    // const Img = $(node)
    //   .find('.K0PDV._div')
    //   .attr('style')
    //   .match(/url\(["']?(.*?)["']?\)/)[1];
    // console.log(Img);

    const Address = $(node).find('.LDgIH').text();
    const Time = $(node).find('.U7pYf').text().substring(0, 12);
    const Number = $(node).find('.xlx7Q').text();

    dataArr.push({
      Title: Title,
      // Img,
      Address: Address,
      Time: Time,
      Number: Number,
    });
  });
  console.log(dataArr);

  // dataArr를 JSON 형식으로 변환
  // const plz = JSON.parse(dataArr);
};
module.exports = { parsing };
