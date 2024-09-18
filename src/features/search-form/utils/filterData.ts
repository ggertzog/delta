interface Item {
  id: number;
  name: string;
  subname: string;
  link: string;
}

interface DataParams {
  inputValue: string;
  content: Item[];
}

type FilteredDataParams = {
  id: number;
  fullname: string;
  link: string;
};

/**
 * Filters the content based on the input value and returns an array of filtered data.
 *
 * @param {DataParams} params - The parameters for filtering.
 * @param {string} params.inputValue - The input value to filter the content.
 * @param {Item[]} params.content - The content to be filtered.
 * @return {FilteredDataParams[]} An array of filtered data.
 */
export const filterData = ({
  inputValue,
  content,
}: DataParams): FilteredDataParams[] => {
  return content
    .filter((item) => {
      return `${item.name} ${item.subname}`
        .toLowerCase()
        .startsWith(inputValue.toLowerCase());
    })
    .map((item) => ({
      id: item.id,
      link: item.link,
      fullname: `${item.name} ${item.subname}`,
    }));
};
