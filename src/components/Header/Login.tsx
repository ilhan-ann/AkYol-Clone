import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Popup from './Popup'
import Input from './Input'
import LogButton from './LogButton'

function Login() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openForget, setOpenForget] = useState(false)
  const [active, setActive] = useState<"phone" | "email">("phone")
  const { t } = useTranslation()
  const [data, setData] = useState({
    phone: "",
    email: "",
    password: "",
  })
  const [dataForget, setDataForget] = useState("")

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const sendData = () => {
    console.table(data)
  }

  const sendDataForget = () => {
    console.log(dataForget)
  }

  return (
    <div>
      <LogButton title={t('login')} action={() => setOpenLogin(true)} />
      <Popup
        sendData={sendData}
        open={openLogin}
        setOpen={setOpenLogin}
        title={t('login')}
        active={active}
        setActive={setActive}
      >
        <div className="w-full max-w-md mx-auto my-4 bg-white rounded-2xl p-6 shadow-2xl">
          {active === "phone" ? (
            <div className="my-5">
              <Input
                regex={/^(6[0-5]|71)\d{6}$/}
                key={1}
                name="phone"
                label="phone"
                type="number"
                defaultValue="+993"
                onChange={handleData}
                value={data.phone}
              />
            </div>
          ) : (
            <div className="my-5">
              <Input
                key={2}
                name="email"
                label="email"
                type="email"
                onChange={handleData}
                value={data.email}
              />
            </div>
          )}
          <div className="mb-3">
            <Input
              name="password"
              label="password"
              type="password"
              onChange={handleData}
              value={data.password}
            />
          </div>
          <div className="text-end">
            <button
              onClick={() => {
                setOpenLogin(false)
                setOpenForget(true)
              }}
              className="text-sm text-gray-500 hover:text-gray-800 transition mb-2"
            >
              Açar sözümi unutdym
            </button>
          </div>
        </div>
      </Popup>
      <Popup
        sendData={sendDataForget}
        title={active === 'phone' ? "Telefon belgiňizi girizň" : "Email-yňyzy giriziň"}
        open={openForget}
        setOpen={setOpenForget}
        active={active}
        setActive={setActive}
      >
        <div className="w-full max-w-md mx-auto my-4 bg-white rounded-2xl p-6 shadow-2xl">
          {active === "phone" ? (
            <div className="my-5">
              <Input
                key={3}
                name="phone"
                label="phone"
                type="number"
                defaultValue="+993"
                onChange={(e) => setDataForget(e.target.value)}
                value={dataForget}
              />
            </div>
          ) : (
            <div className="my-5">
              <Input
                key={4}
                name="email"
                label="email"
                type="email"
                onChange={(e) => setDataForget(e.target.value)}
                value={dataForget}
              />
            </div>
          )}
        </div>
      </Popup>
    </div>
  )
}

export default Login
