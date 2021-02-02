function isValidPayload(payload: any) {
  const isObjReg = /^(\{(\s*.)*\}|\[(\s*.)*\])$/m;
  return isObjReg.test(payload);
}

export { isValidPayload };
