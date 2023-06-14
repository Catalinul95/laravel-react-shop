interface config {
    body: any,
    headers: any,
    method?: string,
}

type client = {
    fetch: (endpoint: string, config?: config) => Object|Promise<any>;
    get: (endpoint: string, config?: config) => Object|Promise<any>;
    post: (endpoint: string, config?: config) => Object|Promise<any>;
}

export async function client(endpoint, {body, ...customConfig} = {} as config) {
    const headers = {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authentication': `Bearer ${localStorage.getItem('JWT_TOKEN')}`
    };

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        }
    } as config;

    if (body) {
        config.body = JSON.stringify(body);
    }

    let data;
    const response = await window.fetch(endpoint, config);
    data = await response.json();

    if (response.ok) {
        return {
            status: response.status,
            data,
            headers: response.headers,
            url: response.url,
        }
    }

    const responseError = {
        type: 'Error',
        message: data.message,
        data: data?.errors ?? [],
        status: response.status,
    };

    let error = new Error();
    error = {...error, ...responseError};

    throw (error);
}

client.get = function (endpoint, customConfig = {}) {
    return client(endpoint, {...customConfig, method: 'GET'} as config);
}

client.post = function (endpoint, customConfig = {} as config) {
    return client(endpoint, {...customConfig, method: 'POST'} as config);
}
client.delete = function (endpoint, customConfig = {} as config) {
    return client(endpoint, {...customConfig, method: 'DELETE'} as config);
}


export default {
    fetch: client,
    post: client.post,
    get: client.get,
} as client;
