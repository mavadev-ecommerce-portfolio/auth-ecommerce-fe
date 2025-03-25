import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartBar() {
    return (
        <div className={'flex flex-row justify-between mt-2'}>
            <div className={'flex flex-row '}>
                <PersonIcon/>
                <div className={'flex flex-col'}>
                    <span className={'text-sm'}>Account</span>
                    <span className={'text-sm'}>Sign In</span>
                </div>
            </div>
            <div className={'flex flex-row '}>
                <ShoppingCartIcon/>
                <div className={'flex flex-col'}>
                    <span className={'text-sm'}>Cart</span>
                    <span className={'text-sm'}>$ 0</span>
                </div>
            </div>
        </div>
    );
}