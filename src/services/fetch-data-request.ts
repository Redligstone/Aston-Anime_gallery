export const fetchDataRequest = async (searchQuery: string) => {
    const baseUrl = 'https://anime-db.p.rapidapi.com/';
    const endpoint = 'anime';
    const apiKey = 'd9b35c9d9emsh2205894a8839181p1bc4bbjsn0036305027ab';

    const queryParams = new URLSearchParams({
        page: '1',
        size: '100',
        search: searchQuery,
        genres: 'Fantasy,Drama',
        sortBy: 'ranking',
        sortOrder: 'asc',
    });

    const url = `${baseUrl}${endpoint}?${queryParams.toString()}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
