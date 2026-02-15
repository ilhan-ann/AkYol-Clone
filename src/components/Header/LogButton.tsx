type ButtonType = {
  title?: string;
  action?: () => void;
  active?: boolean;
}

function LogButton({ title, action }: ButtonType) {
  return (
    <div>
      <button onClick={action} className="p-4">
        <span>{title}</span>
      </button>
    </div>
  )
}

export default LogButton
