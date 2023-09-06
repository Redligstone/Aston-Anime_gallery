export interface AnimeData {
    _id: string;
    title: string;
    image: string;
    ranking: number;
    episodes: number;
    alternativeTitles?: string[];
    type?: string;
    status?: string;
    genres?: string;
    synopsis?: string;
}

export interface AnimeWithId extends Omit<AnimeData, '_id'> {
    id: string;
}
