// events
type Props = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export default function Button({ handleClick }: Props) {
  return (
    <button onClick={(e) => handleClick(e, 1)}>Button</button>
  )
}
