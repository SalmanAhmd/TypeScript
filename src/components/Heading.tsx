type Props = {
  children: string
}

export default function Heading(props: Props) {
  return (
    <h2>{props.children}</h2>
  )
}
