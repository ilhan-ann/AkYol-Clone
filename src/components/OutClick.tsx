import { useEffect, useRef, type ReactNode } from "react"

type OutClickProps = {
  children:ReactNode;
  action:()=>void;
}

function OutClick({children,action}:OutClickProps) {
  const ref = useRef<null | HTMLDivElement>(null)
  useEffect(()=>{
    const listener = (event:MouseEvent)=>{
      const el = ref.current
      if (el && !el.contains(event.target as HTMLDivElement)){
        action()
      }
    }

    document.addEventListener("click",listener)

    return ()=>{
      document.removeEventListener("click",listener)
    }
  },[])
  
  return (
    <div ref={ref}>
      {children}
    </div>
  )
}

export default OutClick