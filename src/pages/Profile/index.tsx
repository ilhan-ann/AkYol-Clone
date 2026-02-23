import { useState } from 'react'
import { useUserStore } from '../../store/user'
import Input from '../../components/Header/Input'
import { BsInfo, BsPerson } from 'react-icons/bs'
import { Forward, KeySquareIcon, LogOut, Trash2 } from 'lucide-react'
import { type UserLoginDataT } from '../../types/User'
import toast from 'react-hot-toast'
import { useUpdateUser } from '../../queries/user'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const { setUser, setToken } = useUserStore(state => state)
    const { mutate } = useUpdateUser()
    const navigate = useNavigate()

    const [data, setData] = useState<UserLoginDataT>({
        id: JSON.parse(localStorage.getItem("user")!).id,
        phone: JSON.parse(localStorage.getItem("user")!).phone,
        fullname: JSON.parse(localStorage.getItem("user")!).fullname,
        address: JSON.parse(localStorage.getItem("user") || "").address,
        gender: JSON.parse(localStorage.getItem("user") || "").gender,
        birthDate: JSON.parse(localStorage.getItem("user") || "").birthDate,
        cashback: JSON.parse(localStorage.getItem("user") || "0").cashback,
    })

    const sendData = () => {
        if (!data.fullname) {
            toast.error("Boshluklary dolduryn!!!")
            return
        }
        setUser(data)
        mutate(data)
        localStorage.setItem("user", JSON.stringify(data))
        toast.success("Üstünlikli saklandy!")
    }

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
        navigate('/')
    }

    return (
        <div className="container mx-auto px-12 mt-4 space-y-6">

            {/* Header */}
            <div className="bg-white shadow-lg p-5 flex items-center gap-4">
                <div className="bg-custom-blue rounded-full p-3">
                    <BsPerson size={32} className="text-white" />
                </div>
                <div>
                    <div className="text-xl font-bold">{data.fullname || "Ulanyjy"}</div>
                    <div className="text-gray-500 text-sm">+993{data.phone}</div>
                </div>
                {/* Cashback badge */}
                <div className="ml-auto border border-blue-600 text-blue-900 rounded-lg px-4 py-2 flex items-center gap-3 font-semibold">
                    <div className="text-sm text-gray-500">Keşbek:</div>
                    <div>{data.cashback || "0.00"} m</div>
                    <div className="relative group">
                        <BsInfo className="border bg-blue-900 rounded-full text-white w-5 h-5 cursor-pointer" />
                        <div className="bg-gray-500 w-max absolute transition-all bottom-7 -right-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 text-white rounded px-2 py-1 text-center text-sm">
                            Kesbek balansynyz her taze yylda bosadylyar!
                            <span className="absolute -bottom-1 right-6 h-2 w-2 rotate-45 transform bg-gray-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white shadow-lg p-6">
                <h2 className="text-lg font-bold mb-5 pb-3">Şahsy maglumatlar</h2>
                <div className="grid grid-cols-2 gap-4">
                    <Input label="Telefon" type="string" defaultValue='+993' name='phone' onChange={() => { }} value={data.phone} />
                    <Input label="Doly adynyz*" type="string" name='fullname' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} value={data.fullname} />
                    <Input label="Salgynyz" type="string" name='address' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} value={data.address} />
                    <Input label="Doglan senaniz" type="date" name='birthDate' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} value={data.birthDate} />
                </div>

                {/* Gender */}
                <div className="flex gap-4 mt-4">
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <div className='bg-gray-300 h-5 w-5 rounded-full flex items-center justify-center'>
                            <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" className="text-gray-300" />
                                {data.gender === "male" && <circle cx="10.5" cy="10.5001" r="7" fill="currentColor" className="text-custom-orange" />}
                            </svg>
                        </div>
                        <input onChange={(e) => setData({ ...data, gender: e.target.value })} className='hidden' type="radio" name="gender" value='male' />
                        Erkek
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <div className='bg-gray-300 h-5 w-5 rounded-full flex items-center justify-center'>
                            <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.5" cy="10.5" r="10.5" fill="currentColor" className="text-gray-300" />
                                {data.gender === "female" && <circle cx="10.5" cy="10.5001" r="7" fill="currentColor" className="text-custom-orange" />}
                            </svg>
                        </div>
                        <input onChange={(e) => setData({ ...data, gender: e.target.value })} className='hidden' type="radio" name="gender" value='female' />
                        Ayal
                    </label>
                </div>
            </div>

            {/* Actions */}
            <div className="bg-white shadow-lg p-6 flex flex-wrap items-center gap-3">
                <button onClick={sendData} className="flex items-center gap-2 bg-green-500 hover:opacity-80 transition-all duration-200 text-white font-bold py-2 px-6 rounded">
                    <Forward size={18} />
                    Yatda sakla
                </button>
                <button className="flex items-center gap-2 py-2 px-4 bg-gray-500 hover:opacity-80 transition-all duration-200 text-white rounded text-sm">
                    <KeySquareIcon size={18} />
                    Acar sozuni uytget
                </button>
                <div className="ml-auto flex items-center gap-4">
                    <button onClick={logout} className="flex items-center gap-2 text-orange-500 hover:underline text-sm font-semibold transition-all duration-200">
                        <LogOut size={16} />
                        Çyk
                    </button>
                    <button className="flex items-center gap-2 text-red-500 hover:underline text-sm">
                        <Trash2 size={14} />
                        Hasabymy pozun
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Profile