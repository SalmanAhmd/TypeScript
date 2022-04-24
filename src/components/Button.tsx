// events
type Props = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ handleClick }: Props) {
  return (
    <button onClick={handleClick}>Button</button>
  )
}
