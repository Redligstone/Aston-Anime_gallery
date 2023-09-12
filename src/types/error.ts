type Code = 400 | 429 | 404;

export const HttpCode: Record<string, Code> = {
    BadRequest: 400,
    TooMAnyRequests: 429,
    NotFound: 404,
};

export type ErrorType = {
    status: Code;
    data: {
        message: string;
    };
};
