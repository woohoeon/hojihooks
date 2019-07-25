export const useURLSearchParamsGetObject = () => {
  const getObject = (paramsString) => {
    if (!paramsString || typeof paramsString !== "string") {
      return {};
    }
    const params = new URLSearchParams(paramsString);
    const arr = [];
    for (const param of params.entries()) {
      arr.push(param);
    }
    return Object.fromEntries(arr);
  }
  return getObject;
}