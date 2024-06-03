import { IoMdAdd } from "react-icons/io";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Input} from "@nextui-org/react";
import {TimeInput} from "@nextui-org/react";
import {Time} from "@internationalized/date";
import { useState } from "react";

export default function AddProject({addFunction}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [color, setColor] = useState('#1677ff');
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);



  return (
    <>
      <Button className="ml-5 flex-shrink-0" startContent={< IoMdAdd size={18}/>}    color="primary" onPress={onOpen}>Add Project</Button>
      <Modal backdrop="transparent" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-[#d15711]">Manage Shift Groups</ModalHeader>
              <ModalBody className="flex justify-center ">
              <p>Add Project :</p>
              <Input type="text" variant="bordered" label="Project Name" onChange={(e)=>{setName(e.target.value)}} />
              <TimeInput label="Start Time" value={startTime} onChange={setStartTime} variant="bordered" placeholderValue={new Time(9)}/>
              <TimeInput label="End Time" value={endTime} variant="bordered" placeholderValue={new Time(9)} onChange={setEndTime}/>
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
                <Button className="bg-[#d15711] text-white text-md" onPress={()=>{addFunction(name,color,startTime,endTime);setEndTime(null);setStartTime(null);onClose()}}>
                  Add Project
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
