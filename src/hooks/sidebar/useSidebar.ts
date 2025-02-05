import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const useSidebar = () => {
    const navigate = useNavigate();
    const handleMenuItemClick = (path: string) => {
        navigate(path);
    };
    
    const [modalOpen, setModalOpen] = useState(false);

    const hahdleOpenSidebar = () =>{
        setModalOpen((prev) => !prev);
    }

    return{
        modalOpen,
        hahdleOpenSidebar,
        handleMenuItemClick,
    }
}