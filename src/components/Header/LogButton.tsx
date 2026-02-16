type ButtonType = {
  title?: string;
  action?: () => void;
  active?: boolean;
}

function LogButton({ title, action }: ButtonType) {
  return (
    <div>
      <button onClick={action}>
        
        <span>{title}</span>
      </button>
    </div>
  )
}

export default LogButton
