function booWho(bool) {
  return typeof bool === 'boolean' ? true : false;
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ a: 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho('a'));
console.log(booWho('true'));
console.log(booWho('false'));
