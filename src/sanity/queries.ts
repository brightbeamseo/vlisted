import { defineQuery } from "next-sanity";

export const BUSINESSES_QUERY = defineQuery(/* groq */ `
  *[_type == "business"] | order(name asc) {
    _id,
    name,
    category,
    address,
    city,
    state,
    "lat": location.lat,
    "lng": location.lng,
    vestimate,
    annualRevenue,
    employees,
    founded,
    sqft,
    description
  }
`);
