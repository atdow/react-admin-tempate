// //mock与api一致
// const res = {
//   status: 200,
//   headers: {},
//   statusText: "OK",
//   config: {},
//   // data: {
//   //   code: 200,
//   //   data: {},
//   //   msg: "success"s
//   // },
//   data: null
// }
// export const builder = (data, code = 200, message, headers = {}) => {
//   if (code !== undefined && code !== 200) {
//     res.status = code
//   }
//   if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
//     res.headers = headers
//   }
//   let dataBody = {
//     code: 200,
//     data: {},
//     msg: "success"
//   }
//   dataBody.data = data
//   if (code !== undefined && code !== 200) {
//     dataBody.code = code
//   }
//   if (message !== undefined && message !== null) {
//     dataBody.message = message
//   }
//   res.data = dataBody
//   res.timestamp = new Date().getTime()
//   return res
// }

//老版
const responseBody = {
    message: '',
    timestamp: 0,
    data: null,
    code: 200,
};
export const builder = (data, message, code = 0, headers = {}) => {
    responseBody.data = data;
    if (message !== undefined && message !== null) {
        responseBody.message = message;
    }
    if (code !== undefined && code !== 0) {
        responseBody.code = code;
        responseBody._status = code;
    }
    if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
        responseBody._headers = headers;
    }
    responseBody.timestamp = new Date().getTime();
    return responseBody;
};

export const getQueryParameters = options => {
    const url = options.url;
    const search = url.split('?')[1];
    if (!search) {
        return {};
    }
    return JSON.parse(
        '{"' +
            decodeURIComponent(search)
                .replace(/"/g, '\\"')
                .replace(/&/g, '","')
                .replace(/=/g, '":"') +
            '"}',
    );
};

export const getBody = options => {
    return options.body && JSON.parse(options.body);
};
