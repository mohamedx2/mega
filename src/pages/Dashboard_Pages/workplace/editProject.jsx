import { IoMdAdd } from "react-icons/io";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Input} from "@nextui-org/react";
import {TimeInput} from "@nextui-org/react";
import {Time} from "@internationalized/date";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";

export default function EditProject({editFunction,project}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [color, setColor] = useState(project.color);
  const [name, setName] = useState(project.name);
  const [startTime, setStartTime] = useState(project.startTime);
  const [endTime, setEndTime] = useState(project.endTime);
  const [invalid,setInvalid] = useState(false);

  const hundleEdit=()=>{
    
    if (!name || !startTime || !endTime) {
      setInvalid(true)
    }
  editFunction(project.id,name,color,startTime,endTime);
  onClose()}
  

  return (
    <>
      <Button isIconOnly color="warning" variant="light" className="mr-3 flex-shrink-0" onPress={onOpen}><FiEdit3 size={18}/></Button>
      <Modal backdrop="transparent" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-[#d15711]">Manage Shift Groups</ModalHeader>
              <ModalBody className="flex justify-center ">
              <p>Edit Project :</p>
              <Input type="text" value={name} variant="bordered" label="Project Name" onChange={(e)=>{setName(e.target.value)}} isInvalid={invalid && name===''} errorMessage={invalid && name==='' ?"please fill all the fields" : null} />
              <TimeInput label="Start Time" value={startTime} onChange={setStartTime} variant="bordered" placeholderValue={new Time(9)} isInvalid={invalid && startTime===null} errorMessage={invalid && startTime===null ?"please fill all the fields" : null}/>
              <TimeInput value={endTime} label="End Time" variant="bordered" placeholderValue={new Time(9)} onChange={setEndTime} isInvalid={invalid && endTime===null} errorMessage={invalid && endTime===null ?"please fill all the fields" : null}/>
              <div className="flex justify-start w-full items-center ml-2">
                <label className="mr-5" >Project Color :</label>
                <input type="color" className="mr-16 w-10 h-10" value={color} onChange={(c) => {
                  setColor(c.target.value);
                }}/>
                <div className="w-[150px] h-[110px] py-1 px-2 border-l-5 border-l-default-300" style={{ backgroundColor: color }}>
                  <p className="text-sm">Location</p>
                  <p className="text-sm font-bold">Workplace</p>
                  <p className="text-sm font-bold">Shift Group</p>
                  <p className="text-sm">00:00 - 23:59</p>
                  <p className="text-sm font-bold">Shift Name</p>
                </div>
              </div>
              
              </ModalBody>
              <ModalFooter>
                <Button variant="light" className="text-[#d15711] text-md" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#d15711] text-white text-md" onPress={hundleEdit}>
                  Edit Project
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
