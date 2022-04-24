// input
type Props = {
  value: string | number,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void

}

export default function Input({ value, handleChange }: Props) {
  return (
    <input type='text' onChange={handleChange} value={value} />
  )
}
