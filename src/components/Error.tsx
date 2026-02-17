import { Link } from 'react-router-dom'

function Error({ error }: { error: {message:string} }) {
  return (
    <div>
      <div className="flex items-center justify-center flex-col h-screen w-full fixed top-0 bg-white z-100">
        <div className="text-3xl font-bold text-gray-600">Näbelli ýalňyşlyk ýüze çykdy</div>
        <div className="text-lg text-gray-400">{error.message}</div>
        <Link to={"/"} className="text-blue-700 text-xl underline">Baş sahypa gidiň</Link>
      </div>
    </div>
  )
}

export default Error