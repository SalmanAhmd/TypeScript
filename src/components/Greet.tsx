type Props = {
  name: string,
  messageCount: number,
  isLoggedIn?: boolean // ? optional
}

export default function Greet(props: Props) {
  return (
    <div>
      <h2>
        Welcome {props.name}
      </h2>
      {props.isLoggedIn && <h3>
        You Have {props.messageCount}!
      </h3>}
    </div>
  )
}
