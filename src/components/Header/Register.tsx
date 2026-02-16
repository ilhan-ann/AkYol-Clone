import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Popup from './Popup'
import Input from './Input'
import LogButton from './LogButton'
import { useRegister } from '../../queries/user'

function Register() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<"phone" | "email">("phone")
  const { t } = useTranslation()
  const [data, setData] = useState({
    phone: "",
    fullname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const { mutate, isSuccess } = useRegister()

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const sendData = () => {
    if (data.password !== data.passwordConfirm) {
      alert("Password bilen confirm password gabat gelenok")
      return
    }
    mutate(data)
  }

  useEffect(() => {
    setOpen(false)
    setData({
      phone: "",
      fullname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    })
  }, [isSuccess])

  return (
    <div>
      <LogButton title={t('signUp')} action={() => setOpen(true)}/>
      <Popup sendData={sendData} open={open} setOpen={setOpen} title={t('signUp')} active={active} setActive={setActive}>
        {
          active === "phone" ?
            <div className='my-4'>
              <Input key={1} regex={/^(6[0-5]|71)\d{6}$/} name="phone" label="Telefon" type="number" defaultValue="+993" onChange={handleData} value={data.phone} />
            </div> :
            <div className='my-4'>
              <Input key={2} name="email" label="Email" type="email" onChange={handleData} value={data.email} />
            </div>
        }
        <div className='mb-4'>
          <Input name='fullname' label="Fullname" type='text' onChange={handleData} value={data.fullname} />
        </div>
        <div className='mb-4'>
          <Input name='password' label="Password" type='password' onChange={handleData} value={data.password} />
        </div>
        <div className='mb-4'>
          <Input name='passwordConfirm' label="Password Confirm" type='password' onChange={handleData} value={data.passwordConfirm} />
        </div>
      </Popup>
    </div>
  )
}

export default Register