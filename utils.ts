function isValidPayload(payload: any) {
  const isObjReg = /^(\{(\s*.)*\}|\[(\s*.)*\])$/m;
  return isObjReg.test(payload);
}

function addDoubleQuotes(str: string) {
  return str.replace(/(\{|,)\s?(\"?([a-zA-Z-_]+)\"?)(?=\s?:)/, '$1"$3"');
}

function lalala(str: string): void {
  console.log(str);
}

export { isValidPayload, addDoubleQuotes, lalala };
