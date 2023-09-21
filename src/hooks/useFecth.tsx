import { useContekst } from '../context/index'

const useFetch = () => {
  const context = useContekst()

  const customeFetch = async ( url: string, method: string, body: object | undefined, usePreloader = false ) => {
    try {
      if ( usePreloader ) {
        context.setLoading( true )
      }
      const rawData = await fetch( url, {
        body: body ? JSON.stringify( body ) : null,
        method,
        headers: {
          'Content-Type': 'application/json',
        }
      } )
      if ( rawData.status === 200 ) {
        const data = await rawData.json()
        return { status: 'success', data }
      }
      console.error( { response: rawData, url, method, body } )
      throw new Error( `Status ${ rawData?.status } ${ rawData?.statusText }` )
    } catch ( error ) {
      console.error(error)
        let message = '' 
        if (error instanceof TypeError) {
          message = error.message
        } else if (error instanceof RangeError) {
          message = error.message
        } else if (error instanceof EvalError) {
          message = error.message
        } else if (typeof error === 'string') {
          message = error
        } else {
          message = 'Unknow error occured'
        }
      context.setError(message)
      return { status: 'error', message }
    } finally {
      if ( usePreloader ) {
        context.setLoading( false )
      }
    }
  }

  return customeFetch
}

export default useFetch
