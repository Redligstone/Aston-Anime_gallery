export interface HistoryRecord {
    query: string;
    timestamp: string;
    queryResultNumber: number;
    queryResultLink: string;
}

export interface HistoryRecordWithId {
    id: string;
    query: string;
    timestamp: string;
    queryResultNumber: number;
    queryResultLink: string;
}
