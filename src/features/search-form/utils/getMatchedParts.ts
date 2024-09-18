interface MatchedPartsParams {
  fullname: string;
  inputValue: string;
}

/**
 * Returns the parts of the `fullname` string that match the `inputValue` string.
 *
 * @param {MatchedPartsParams} params - An object containing the `fullname` and `inputValue` strings.
 * @param {string} params.fullname - The full name string to search in.
 * @param {string} params.inputValue - The value to search for in the `fullname` string.
 * @return {{ beforeMatch: string; matchText: string; afterMatch: string; }} An object containing the parts of the `fullname` string that match the `inputValue` string.
 */
export const getMatchedParts = ({
  fullname,
  inputValue,
}: MatchedPartsParams): {
  beforeMatch: string;
  matchText: string;
  afterMatch: string;
} => {
  const matchIndex = fullname.toLowerCase().indexOf(inputValue.toLowerCase());
  let beforeMatch: string = '';
  let matchText: string = '';
  let afterMatch: string = '';

  if (matchIndex !== -1) {
    beforeMatch = fullname.substring(0, matchIndex);
    matchText = fullname.substring(matchIndex, matchIndex + inputValue.length);
    afterMatch = fullname.substring(matchIndex + inputValue.length);
  }
  return { beforeMatch, matchText, afterMatch };
};
