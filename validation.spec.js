//.spec.js => 테스트 대상
// 해당 케이스가 정상인가 비정상인가 판단함.
const { isEmail } = require('./validation');

test('테스트가 성공하는 상황', () => {
    expect(isEmail('이메일이 아니에요')).toEqual(false);
});

// test('테스트가 실패하는 상황', () => {
//     expect(isEmail('my-email@domain.com')).toEqual(true);
// });

test('입력받은 이메일 주소는 @ 문자가 1개만 있어야 합니다.', () => {
    expect(isEmail('waterflame1@naver.com')).toEqual(true);
    expect(isEmail('waterflame1@@@@naver.com')).toEqual(false);
    expect(isEmail('waterflame1naver.com')).toEqual(false);
})

test('입력받은 이메일 주소에는 공백이 없어야 합니다.', () => {
    expect(isEmail('waterflame1 @naver.com')).toEqual(false);
    expect(isEmail('waterflame1@naver.com')).toEqual(true);
})

test('입력받은 이메일 주소에는 하이푼 없어야 합니다.', () => {
    expect(isEmail('waterflame1-naver.com')).toEqual(false);
    expect(isEmail('waterflame1@naver.com')).toEqual(true);
})