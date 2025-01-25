import { defineQuery } from "next-sanity";

// Define the query for food products
const foodQuery = defineQuery(`
  *[_type == "food"] {
    _id,
    name,
    category,
    price,
    originalPrice,
    tags,
    image,
    description,
    available
  }
`);

// Define the query for chefs
const chefQuery = defineQuery(`
  *[_type == "chef"] {
    _id,
    name,
    position,
    experience,
    specialty,
    image,
    description,
    available
  }
`);

export { foodQuery, chefQuery };
