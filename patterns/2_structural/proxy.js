const networkFetch = url => `${url} - Server response`;

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply (target, thisArg, argArray) {
    const url = argArray[0];
    if (cache.has(url)) {
      return `${url} - Cache response`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, argArray);
    }
  }
})

console.log(proxiedFetch('google.com'));
console.log(proxiedFetch('yandex.com'));
console.log(proxiedFetch('google.com'));
