
import { Button, Checkbox, Input,  Modal,  ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure, } from "@nextui-org/react"
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon"
import { EyeFilledIcon } from "./EyeFilledIcon"
import { useState } from "react"
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from 'react-i18next';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// axios.defaults.baseURL ='http://localhost:8000';
// axios.defaults.withCredentials = true;
import { loginUser } from '../../../redux/apiCalls/authApiCall';
import { useDispatch } from "react-redux"; // Import useDispatch
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function LogButton() {


    const [email,setEmail] =useState('')
    const [password,setPassword]=useState('')
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation();
    const toggleVisibility = () => setIsVisible(!isVisible);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const dispatch = useDispatch();

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
          e.preventDefault();
          if (email.trim() === '') return toast.error('Veuillez remplir tous les champs du formulaire.');
          if (password.trim() === '') return toast.error('Veuillez remplir tous les champs du formulaire.');
          dispatch(loginUser({ email, password }));
        };


    return (
        <>
        <Button onPress={onOpen} variant='bordered' className="border-[#D3570D] text-[#D3570D] font-semibold text-md mr-[53px]">{t('log')}</Button>
        <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement="top-center"
            className="dark"
        >
        <ModalContent>
          {(onClose) => (
            <form  onSubmit={handleSubmit}>
              <ModalHeader className="text-[#d3570d]   flex flex-col gap-1">Log In</ModalHeader>
              <ModalBody className="flex flex-col ">
              {/* <Button onClick={()=>{}} variant="bordered" color="default"  className="w-[80%] text-white flex justify-center items-center" startContent={<FcGoogle size={20} className="flex-shrink-0"/>} > 
                  Log In with Google
                </Button>
                <div className="w-[80%] flex justify-center items-center">
                  <div className="h-0 w-[40%] border-1 border-white"></div>
                  <p className="text-sm text-white mx-3">or</p>
                  <div className="h-0 w-[40%] border-1 border-white"></div>
                </div> */}
                <Input
                  autoFocus
                  className="text-white "
                  endContent={
                    < HiOutlineMail  className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
                <Input
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                className="text-2xl text-white flex-shrink-0 "
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
                />

                <div className="flex py-2 px-1 justify-between items-start">
                <Checkbox
                    color="warning"
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                </Checkbox>
                  <a className="text-[#d3570d] text-sm border-b-1 border-[#d3570d]" href="#" >
                    Forgot password?
                  </a>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-end ">
                {/*  onClick={() =>{ isSign(true)}} bech ki tenzel 3leha thezek lel sign*/}
              {/* <a className="text-sm text-white border-b-1 border-white" onClick={() =>{}} href={""} >
                    No account ? Sign Up
                </a> */}
                <Button  type="submit" size="lg"  className="bg-[#d3570d] text-white font-semibold flex justify-center" > 
                  Log In
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
        </Modal>
        </>
    )
}