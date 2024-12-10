'use stirict';
const userNameinput =document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(
  'click',
  () => {
    const userName = userNameinput.value;
    if(userName.length === 0){
      //名前がからの時は処理を終了する
      return;
    }
    console.log(userName);

    //診断結果表示エリアの作成
    resultDivision.innerText = '';
    const heading =document.createElement('h3');
    heading.innerText = '診断結果';
    resultDivision.appendChild(heading);

    const paragraph =document.createElement('p');
    const result =assessment(userName);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);
    //ツイートエリアの作成
    tweetDivision.innerText = '';
    const anchor = document.createElement('a');
    const hrefvalue =
    'https://x.com/intent/tweet?button_hashtag=' +
    encodeURIComponent('あなたのいいところ') +
    '&ref_src=twsrc%5Etfw';

        anchor.setAttribute('href',hrefvalue);
        anchor.setAttribute('class','twitter-hashtag-button');
        anchor.setAttribute('data-text',result);
        anchor.innerText = 'Tweet #あなたのいいところ'

        tweetDivision.appendChild(anchor);

        const script = document.createElement('script');
        script.setAttribute('src','https://platform.twitter.com/widgets.js');
        tweetDivision.appendChild(script);

        //Enter キーで診断できるようにする処理
        userNameInput.addEventListener(
          'keydown',
          (event) => {
            if (event.code === 'Enter') {
              assessmentButton.dispatchEvent(new Event('click'))
            }
          }
        )
        
)
const answers=[
'###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
'###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
'###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param{string}username ユーザの名前
 * @return{string}診断結果
 */
function assessment(username){
  //全文字のコード番号を取得してそれを足し合わせる
  let sumofcharcode = 0;
  for(let i = 0; i < username.length; i++){
    sumofcharcode = sumofcharcode + username.charCodeAt(i);
  }

  //文字のコード番号の合計を回答の数で割って添え字の数字を求める
  const index = sumofcharcode % answers.length;
  let result = answers[index];

  result = result.replaceAll('###userName###',username);
  return result;
}

//テストを行う関数
function test(){
  console.log('診断結果の文章のテスト');

  //太郎
 console.log('晃太郎');
 console.assert(
  assessment('晃太郎') ===
  '晃太郎のいいところは節度です。強引すぎない晃太郎の考えに皆が感謝しています。',
  '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません'
 );

 //次郎
 console.log('順子');
 console.assert(
  assessment('順子') ===
'順子のいいところは用心深さです。順子の洞察に、多くの人が助けられます。',
'診断結果の文言の特定の部分を名前に置き換える処理が正しくありません'
 );

 //光樹
 console.log('光樹');
 console.assert(
  assessment('光樹') ===
'光樹のいいところは情熱です。光樹の情熱に周りの人は感化されます。',
'診断結果の文言の特定の部分を名前に置き換える処理が正しくありません')

  console.log('診断結果の文章のテスト終了');
}

test();