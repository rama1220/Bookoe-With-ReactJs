import  useSWR from 'swr'



const fetcher = (...args) => fetch(...args).then((res) => res.json());
const baseUrl = 'https://bookapi.cm.hmw.lol/api/books'

 export const Endpoint1 = () =>{

const {data, error} = useSWR(`${baseUrl}`,fetcher)

return {data, error}

}

export const Endpoint2 = () =>{

    const {data, error} = useSWR(`${baseUrl}?page=2`,fetcher)

    return {data, error}

}

export const Endpoint3 = () =>{

    const {data,error} = useSWR(`${baseUrl}?page=10`, fetcher)

    return {data, error}

}
