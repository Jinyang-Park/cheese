const axios = require('axios');
// import axios from 'axios';
// import { Cheerio } from 'cheerio';
// import cheerio from 'cheerio';
const cheerio = require('cheerio');
const fs = require('fs');
const { DefaultDeserializer } = require('v8');

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
  // console.log(html.data);

  const dataArr = [];
  const dataPath = './information.json';
  // div하나가 빠져서 자꾸 빈배열이 나온것이다...ㅅㅂ
  // const $cheesebon = $('#place-main-section-root > section > div > div ');
  const $cheesebon = $('#place-main-section-root > div > section > div > div ');
  // console.log($cheesebon);

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

    // 빈 값 리턴
    if (Title !== '') {
      dataArr.push({ Title });
    } else if (Address !== '' && Time !== '' && Number !== '') {
      dataArr.push({ Address, Number, Time });
    }
    // 오브젝트 형식으로 배열에 담기
    // dataArr.push({
    //   Title,
    //   Address,
    //   Time,
    //   Number,
    // });
  });
  console.log(dataArr);
  return fs.writeFileSync(dataPath, JSON.stringify(dataArr));
};
module.exports = parsing;
