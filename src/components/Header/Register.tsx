import { useState } from 'react'
import Button from './Button'
import { useTranslation } from 'react-i18next'
import Popup from './Popup'
import Input from './Input'
import { GoPersonAdd } from 'react-icons/go'

function Register() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<"phone" | "email">("phone")
  const { t } = useTranslation()
  const [data, setData] = useState({
    phone: "",
    fullname:"",
    email: "",
    password: "",
    passwordConfirm:"",
  })

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const sendData = ()=>{
    console.table(data)
  }

  return (
    <div>
      <Button title={t('signUp')} action={() => setOpen(true)}>
        <GoPersonAdd size={20} className='text-custom-blue font-bold mr-3' />
      </Button>

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