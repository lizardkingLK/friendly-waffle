const baseUrl = "https://api.unsplash.com", accessKey = 'PbD7wF0l9taVezo03ZOl_yOLQFexX2TxezxxXp3AqEU', search = `${baseUrl}/search/photos?client_id=${accessKey}`;

const buildRequest = async (query:string = "", url:string = search) => await fetch(`${url}${query}`);

export const searchImages = async (keyword:string, page:number = 1,perPage:number = 100, orderBy:string = 'relevant') => {
    if (!keyword || !accessKey) {
        return;
    }

    return await buildRequest(`&query=${keyword}&page=${page}&per_page=${perPage}&order_by=${orderBy}`).then((value) => value.json());
}