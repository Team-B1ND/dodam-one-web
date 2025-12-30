import { Dialog, DodamModal } from "@b1nd/dds-web";
import {AlertText} from "./style"

interface ModalProps {
    title:string;
    text:string;
    iseOpen:boolean;
    handleClose: () => void; 
}


const NullAccountModal = ({title,text,iseOpen,handleClose}:ModalProps) => {
    return(
        <DodamModal isOpen={iseOpen} close={handleClose} $background={true}>
        <Dialog 
        title={title}
        text={text}
        type={{
          dialog: "ALERT", 
          close: {
            content: "닫기",
            onClick: () => handleClose,
            style: AlertText,
          },
        }}
      />
      </DodamModal>
    )
}

export default NullAccountModal;

