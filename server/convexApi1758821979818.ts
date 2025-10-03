const { anyApi } =require("convex/server");

// Export api and internal like before, but no type casting in JS
 const api = anyApi;
 const internal = anyApi;

// In JS you don't define types, so no PublicApiType/InternalApiType
module.exports = { api, internal };