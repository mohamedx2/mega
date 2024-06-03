import React, { useState, useMemo, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Pagination,
} from "@nextui-org/react";
import { IoLocationOutline } from "react-icons/io5";
import AddProject from "./addProject";
import { MdOutlineDeleteSweep } from "react-icons/md";
import {Time} from "@internationalized/date";
import EditProject from "./editProject";
import { FaBookmark } from "react-icons/fa";


const initialProjects = [
  { id: 1, name: 'Cmr' , color: "#95c219" ,startTime :new Time(9) , endTime : new Time(15)},
  { id: 2, name: 'NHI2', color: "#2eb3e8" ,startTime :new Time(9) , endTime : new Time(15)},
  { id: 3, name: 'Kreamer',color: "#e00000" ,startTime :new Time(9) , endTime : new Time(15)},
  { id: 4, name: 'Kunden Gewinnung', color: "#ed5007",startTime :new Time(9) , endTime : new Time(15) },
  { id: 5, name: 'Marketing',color: "#ffff00" ,startTime :new Time(9) , endTime : new Time(15)},
  { id: 6, name: 'Meeting' ,color: "#46b0a2",startTime :new Time(9) , endTime : new Time(15)},
  { id: 7, name: 'Schulung',color: "#cccccc",startTime :new Time(9) , endTime : new Time(15) },
];

export default function Workspace() {
  const [projects, setProjects] = useState(initialProjects);
  const [filterValue, setFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState({ column: "name", direction: "ascending" });
  const [page, setPage] = useState(1);

  const handleAdd = (projectName,projectColor,startTime,endTime) => {
    const newProject = { id: projects.length + 1, name: projectName, color: projectColor,startTime:startTime,endTime:endTime };
    setProjects([...projects, newProject]);
  };

  const handleEdit = (id,newName,newColor,startTime,endTime) => {
    if (newName && newColor && startTime && endTime) {
      setProjects(prev=>prev.map(project => project.id === id ? {...project, name: newName, color: newColor,startTime:startTime,endTime:endTime} : project));
    }
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project => project.name.toLowerCase().includes(filterValue.toLowerCase()));
  }, [projects, filterValue]);

  const pages = Math.ceil(filteredProjects.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredProjects.slice(start, end);
  }, [page, filteredProjects, rowsPerPage]);



  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
}, []);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const topContent = useMemo(() => {
    return (
    <>
      <div className="flex justify-between gap-3 w-full items-baseline mb-5">
        <div className="flex w-[50%]">
            <Input
            isClearable
            className="w-[60%]  flex-shrink-0"
            placeholder="Search by name..."
            value={filterValue}
            onClear={onClear}
            onValueChange={onSearchChange}
            />
            <AddProject addFunction={handleAdd}/>
        </div>
        <label className="flex items-center text-default-400 text-small">
          Rows per page:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            onChange={onRowsPerPageChange}
            value={rowsPerPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>

      </div>
      </> )}, [filterValue, onClear, onRowsPerPageChange, onSearchChange, rowsPerPage]);
      return(

          <>
            <Table
              selectionMode="single"
              selectedKeys={[]}
              aria-label="workplace"
              sortDescriptor={sortDescriptor}
              topContent={topContent}
              onSortChange={setSortDescriptor}
              className="mb-3"
              shadow="sm"
            >
              <TableHeader>
                <TableColumn key="name" allowsSorting>
                  Name
                </TableColumn>
                <TableColumn key="actions">Actions</TableColumn>
              </TableHeader>
              <TableBody emptyContent={"No projects found"} items={items}> 
                {!items ? (
                  []
                ) : (
                  items.map((p) => (
                    <TableRow className="cursor-pointer" key={p.id} onClick={() => {
                      //   
                    }}>
                      <TableCell>
                        <p className="flex items-center">
                          <FaBookmark color={p.color} size={20} className="mr-2" />
                          {p.name}
                        </p>
                      </TableCell>
                      <TableCell className="flex justify-end">
                        <Button
                          variant="light"
                          color="success"
                          className="mr-2"
                          isIconOnly
                          onClick={()=>{}}
                        ><IoLocationOutline size={20} /></Button>
                        <EditProject editFunction={handleEdit} project={p} />
                        <Button
                          variant="light"
                          color="danger"
                          isIconOnly
                          onClick={() => {
                            handleDelete(p.id);
                          }}
                        >
                          <MdOutlineDeleteSweep size={20} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            <div className="py-2 px-2 flex justify-between items-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
              <div className="flex gap-2">
                <Button isDisabled={page === 1} size="sm" variant="flat" onClick={onPreviousPage}>
                  Previous
                </Button>
                <Button isDisabled={page === pages} size="sm" variant="flat" onClick={onNextPage}>
                  Next
                </Button>
              </div>
            </div>
          </>
        );
      }