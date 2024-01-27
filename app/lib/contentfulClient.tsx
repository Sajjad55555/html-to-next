var contentful = require("contentful")

const clients = contentful.createClient({
    accessToken : process.env.CONTENTFUL_ACCESS_TOKEN,
    space:process.env.CONTENTFUL_SPACE_ID
})
export default clients