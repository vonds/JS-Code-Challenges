// https://www.codewars.com/kata/54a91a4883a7de5d7800009c
const incrementString = strng => {
    return strng.replace(/^([a-z]*)(\d*)$/i, function(match, p1, p2) {
      const min_pad = (str) => str.length < p2.length ? '0'.repeat(p2.length - str.length) + str: str
      return (p1 ? p1 : '') + min_pad(String(p2 ? parseInt(p2)+1 : 1))
    })
}