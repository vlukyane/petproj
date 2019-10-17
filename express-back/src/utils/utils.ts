import {IResponse} from '../common/types';

const sendResponse = (res, data, code = 200) => {
    let send_data = <IResponse>{};
    if(code >= 400 && code <= 451) {
        send_data.success = false;
        send_data.error = true;
    }
    else if(code >= 200 && code <= 226) {
        send_data.success = true;
        send_data.error = false;
    }
    if (typeof data === 'object') {
        send_data = Object.assign(send_data, data);
    }
    res.statusCode = code;
    return res.send(send_data);
};

module.exports = {
    sendResponse
};
