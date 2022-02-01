const processRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved')
    }, 3000)
  })
}

const sendRequest = async () => {
  console.log('Send request')

  const response = await processRequest()
    .catch(err => console.log(err));

  console.log(response)

  console.log('Got response')
}

sendRequest()
