



export const fetchData = async (url, option) => {
    const dataFetched = await fetch(url, option);
    const data = dataFetched.json()

    return data
};
