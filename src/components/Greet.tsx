type Props = {
  name: string
}

export default function Greet(props: Props) {
  return (
    <div>Welcome {props.name}</div>
  )
}
