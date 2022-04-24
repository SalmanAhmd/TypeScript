
type Props = {
  name:{
    first: string,
    last: string
  }
}

export default function Person(props: Props) {
  return (
    <div><p>{props.name.first}  {props.name.last}</p></div>
  )
}
