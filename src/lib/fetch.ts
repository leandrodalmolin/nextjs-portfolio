export async function fetchData(
  query: string,
  revalidate: number = 60 * 60 * 24
) {
  // Request
  try {
    const response = await fetch(process.env.HYGRAPH_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      },
      next: {
        revalidate,
      },
      body: JSON.stringify({
        query,
      }),
    })

    if (!response.ok) {
      throw new Error('Request failed!');
    }

    const { data } = await response.json()
    return data
  } 
  
  // Error
  // TODO: handle error in a global state
  catch (err) {
    if (err instanceof Error) {
      // setError(err.message);
      console.error(err.message)
    } else {
      // setError('Something went wrong!');
      console.error('Something went wrong!')
    }
  }
}
