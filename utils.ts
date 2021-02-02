function addDoubleQuotes(str: string) {
  return str.replace(/(\{|,)\s?(\"?([a-zA-Z-_]+)\"?)(?=\s?:)/, '$1"$3"');
}

export { addDoubleQuotes };
