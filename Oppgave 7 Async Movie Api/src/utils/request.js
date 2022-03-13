const request = async (url) => {
  const config = {
    method: 'GET',
  }
  const response = await fetch(url, config)
  console.log('Response: ', response)
  const data = await response.json()
  console.log('Data: ', data)

  return data
}

export { request }
