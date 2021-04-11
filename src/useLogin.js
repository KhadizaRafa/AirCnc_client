import { useState } from 'react'
import { projectAuth } from './firebase/config'

// const error = ref(null)
// const isPending=ref(false)
const [error,setError] = useState('')
const [isPending, setIsPending] = useState(false)

const login = async (email, password) => {
    setError(null)

  try {
    setIsPending(true)
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    setError(null)
    setIsPending(false)
    return res
  }
  catch(err) {
    setIsPending(false)
    console.log(err.message)
    setError('Incorrect login credentials')
  }
}

const useLogin = () => {
  return { error, login ,isPending}
}

export default useLogin