export type Location = {
    country: string,
    region: string,
    timezone: string,
    city: string,
    lat: number,
    lng: number,
    postalCode: number,
    geonameId: number
}

export type GeoAPIType = {
    ip: string,
    location: Location,
    domains: Array<string>,
    as: {
        asn: number,
        name: string,
        route: string,
        domain: string,
        type: string
    },
    isp: string,
    proxy: {
        proxy: boolean,
        vpn: boolean,
        tor: boolean
    },
    messages?: string
}