import {toast} from 'react-toastify';
import {ErrorType, HttpCode} from '../types/error';

export const errorHandle = (error: ErrorType): void => {
    switch (error.status) {
        case HttpCode.BadRequest:
            toast.info(error.data.message);
            break;
        case HttpCode.TooMAnyRequests:
            toast.info('Too many requests! Use a new key');
            break;
        case HttpCode.NotFound:
            toast.info(error.data.message);
            break;
        default:
            toast.info(`Unknown error: ${error.data?.message}`);
    }
};
