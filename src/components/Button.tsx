// events
type Props = {
  handleClick: () => void
}

export default function Button({ handleClick }: Props) {
  return (
    <button onClick={handleClick}>Button</button>
  )
}
