export const fetchData = async (searchQuery: string) => {
    const baseUrl = 'https://anime-db.p.rapidapi.com/';
    const endpoint = 'anime';
    const apiKey = '49fcafd200msh89fd2520eebf945p118f59jsnb088872a2a85';

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
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result);
        return result; //
    } catch (error) {
        console.error(error);
        throw error;
    }
};
