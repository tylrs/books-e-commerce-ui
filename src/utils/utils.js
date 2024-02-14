export const generateRandomState = () => {
  const validChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let array = new Uint8Array(40)
  crypto.getRandomValues(array)
  array = array.map((int) => validChars.charCodeAt(int % validChars.length))
  return String.fromCharCode.apply(null, array)
}
