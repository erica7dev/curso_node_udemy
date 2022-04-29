import url from 'url';
const myURL = 'https://user:pass@sub.example.com:8080/catalog/a/t/h?produtos=mesa';

const parsedUrl = new url.URL(myURL); //criando url decomposta
console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'));
