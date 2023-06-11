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
    const headers = {'Content-type': 'application/json'};

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
    try {
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

        throw new Error(response.statusText);
    } catch (err) {
        return Promise.reject(err.message ? err.message : data);
    }
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
