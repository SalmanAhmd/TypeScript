// string literals
type Props = {
  status: 'loading' | 'success' | 'error'
}

export default function Status(props: Props) {
  let message

  if (props.status === 'loading') message = 'Loading...'
  if (props.status === 'success') message = 'Data Fetched Succesfully'
  if (props.status === 'error') message = 'Error Fetching Data'

  return (
    <h2>{message}</h2>
  )
}
