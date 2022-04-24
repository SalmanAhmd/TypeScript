// array of object
type Props = {
  names: {
    first: string,
    last: string
  }[]
}

export default function PersonList(props: Props) {
  return (
    <div>{props.names.map((name, index) =>
      <p key={index}>{name.first} {name.last}</p>)}</div>
  )
}
