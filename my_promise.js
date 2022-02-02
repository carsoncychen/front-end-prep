// const processRequest = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise resolved')
//     }, 3000)
//   })
// }

// const sendRequest = async () => {
//   console.log('Send request')

//   const response = await processRequest()
//     .catch(err => console.log(err));

//   console.log(response)

//   console.log('Got response')
// }

// sendRequest()


// Promisify a function


const getData = (index) => {
  const data = [
    {
      title: "title 1",
      body: 'body 1'
    },
    {
      title: 'title 2',
      body: 'body 2'
    },
    {
      title: 'title 3',
      body: 'body 3'
    }
  ]

  if (index < 0 || index > data.length) {
    throw 'Index out of bound'
  }

  return data[index]
}

const promisifyFunc = (func) => {
  return function(...args) {
    return new Promise((resolve, reject) => {
      try {
        const response = func(...args);
        resolve(response);
      } catch (err) {
        reject(err)
      }
    })
  }
}

const promisifiedFunc = promisifyFunc(getData);

promisifiedFunc(2)
  .then(res => console.log(res))
  .catch(err => console.log('Error',err))

promisifiedFunc(4)
  .then(res => console.log(res))
  .catch(err => console.log('Error', err))
