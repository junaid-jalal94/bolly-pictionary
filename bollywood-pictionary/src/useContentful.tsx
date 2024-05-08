import { createClient } from "contentful"


const useContenful = () => {
  const config = {
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY as string
  }
  const client = createClient(config)

  const getMovies = async () => {
    try {
      const entries = await client.getEntries( { 
        content_type: 'bollywood-movies'
      })
      const sanitizedEntries = entries.items.map((item) => {
        return {
          ...item.fields
        }
      })
      return sanitizedEntries;
    } catch(error) {
      console.log(`Error occurred: ${error}`)
    }
  };
  return { getMovies }
}

export default useContenful;
