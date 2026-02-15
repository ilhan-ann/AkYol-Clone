import { CgShoppingCart } from "react-icons/cg";

function Cart() {
    return (
        <div className="flex items-center gap-2 text-white mr-5">
            <div className="relative mr-1">
                <CgShoppingCart className="text-custom-blue" size={32} />
                <span className="absolute -top-3 -right-2 bg-gray-300 text-black opacity-80 text-sm rounded-full px-1">
                    0
                </span>
            </div>
            <div className="text-sm text-black leading-tight">
                <div>Sebet</div>
                <div className="text-gray-400">(empty)</div>
            </div>
        </div>
    )
}

export default Cart