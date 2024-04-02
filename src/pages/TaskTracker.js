import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './TaskTracker.css'; 
import Select from "react-dropdown-select";

const TaksTracker = () => {

    const sheetName = [
        { value: 1, label: 'Additive' },
        { value: 2, label: 'iProspect_DK' },
        { value: 3, label: 'DDL_iProspect_London' },
        { value: 4, label: 'iProspect_IR' }
      ];  

    const options = [
        { value: 1, label: 'High' },
        { value: 2, label: 'Medium' },
        { value: 3, label: 'Low' }
      ];  

      const fteNum = [
        { value: 1, label: 1 },
        { value: 2, label: 2, },
        { value: 3, label: 3 }
      ];  

      const jobStatus = [
        { value: 1, label: 'In Process' },
        { value: 2, label: 'In QA', },
        { value: 3, label: 'Completed' },
        { value: 4, label: 'Waiting for Update' }
      ]; 

      const jobAlloted = [
        { value: 1, label: 'Vinoth Kasi Kumar' },
        { value: 2, label: 'Devangi Mota', },
        { value: 3, label: 'ThilipKumar Ganesan' },
        { value: 4, label: 'Pradnya Dabir' },
        { value: 5, label: 'Deepan Nagarajan' },
        { value: 6, label: 'Dinesh Velmurugan' },
        { value: 7, label: 'Prabhu Manu' }
      ]; 

      const jobQa = [
        { value: 1, label: 'Vinoth Kasi Kumar' },
        { value: 2, label: 'Devangi Mota', },
        { value: 3, label: 'ThilipKumar Ganesan' },
        { value: 4, label: 'Pradnya Dabir' },
        { value: 5, label: 'Deepan Nagarajan' },
        { value: 6, label: 'Dinesh Velmurugan' },
        { value: 7, label: 'Prabhu Manu' }
      ]; 

    const [startDate, setStartDate] = useState(new Date());
    const [estDate, setEstDate] = useState(new Date());
    const [value, setValue] = useState('10:00');
    const [estValue, setEstValue] = useState('10:00');

    const [deadDate, setDeadDate] = useState(new Date());
    const [deadValue, setDeadValue] = useState('10:00');
    const [drpdwn, setDrpdwn] = useState('');
    const [fte, setFte] = useState('');
    const [jbStatus, setJbStatus] = useState('');
    const [jballoted, setJballoted] = useState('');
    const [jbQa, setJbQA] = useState('');
    const [sheet, setSheet] = useState('');
 
    console.log(drpdwn, fte, jbStatus, jballoted, jbQa)
    function Submit(e) {
        e.preventDefault();
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        //"https://script.google.com/macros/s/AKfycbxJobvDa7PUyfpD_diO9yRE9X5qNb_k4GWxRQQuuRaZO3nC8LmPQhqL-bofZCfY6Zvdvw/exec"
        fetch(
          "https://script.google.com/macros/s/AKfycbwYTfTAA1hkJsweXifpFLMh3FDUF29-r6lM0uTClDVMk4JaslYDPbRqF3hcPEvgsbUHmA/exec",
          {
            method: "POST",
            body: formDatab,
            
          }
          
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
            
          });
          setDrpdwn('')
          setFte('')
          
          alert('data fetched successfully')
      }

      
    
    return <> 
      
      <div className="bg-gray">
      
        <form className="h-full bg-zinc-200  mx-auto mt-10 sm:w-2/4 rounded-t-2xl" onSubmit={(e) => Submit(e)}>
        
                <h1 className="text-4xl bg-blue-950 text-white font-bold text-center pt-20 pb-20 rounded-t-2xl">TASK TRACKER</h1>
                <div className="px-20 pt-20 pb-20 mx-auto flex flex-col">
                    
                <div className="sm:flex flex-row gap-5 items-center">
                        <div className="w-1/2">
                            <h1 className="font-[700] mb-2">Sheet Name</h1> 
                            <Select className="bg-white drpdwn" options={sheetName} onChange={(sheet) => setSheet(sheet)} name="Sheet_Name" />
                            {/* <input placeholder="Sheet_Name" name="Sheet_Name" type="text" />   */}
                            
                        </div> 
                      
                    </div>

                    <div className="sm:flex flex-row gap-5 items-center">
                        <div className="w-1/2">
                            <h1 className="font-[700] mb-2">Received_Date</h1>
                            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="Received_Date" />  
                            
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700] mt-2 mb-2">Received_Time</h1>
                            <TimePicker className='bg-white' onChange={setValue} value={value} name='Received_Time' />
                        </div>
                      
                    </div>
                   
                    
                    
                    <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">   
                            <h1 className="font-[700]">Task Subject</h1>
                            <input placeholder="Task Subject" name="Task_Subject" type="text" /> 
                        </div>
                        <div className="w-1/2">   
                            <h1 className="font-[700]">Issue ID</h1>
                            <input placeholder="Issue ID" name="Issue_ID" type="number" />
                        </div>
                         
                        
                        
                    </div>
                    <div className="sm:flex flex-row gap-5">
                        
                        <div className="w-1/2">   
                            <h1 className="font-[700]">Est Hour</h1>
                            <input placeholder="Hours_Estimation_Approx" name="Hours_Estimation_Approx" type="number" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">ETA</h1>
                            <ReactDatePicker selected={estDate} onChange={(date) => setEstDate(date)} name="Estimated_Deadline_Date"/>  
                            
                        </div>
                        
                        
                    </div>
                    <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">ETA TIME</h1>
                            <TimePicker className='bg-white' onChange={setEstValue} value={estValue} name="Estimated_Deadline_in_IST" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Priority_Level</h1>
                            <input placeholder="Task_Priority_Level" name="Task_Priority_Level" type="number" />
                        </div>
                     </div>
                    
                    <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Complexity Level</h1>
                            <Select className="bg-white drpdwn" options={options} onChange={(values) => setDrpdwn(values)} name="Complexity_Level" />
                            {/* <input placeholder="Complexity Level" name="Complexity_Level" type="text" /> */}
                            
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Delivery Date</h1>
                            <ReactDatePicker selected={deadDate} onChange={(date) => setDeadDate(date)} name="Delivery_Date" /> 
                        </div>
                    </div>
                     
                     <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Delivery Time</h1>
                            <TimePicker className='bg-white' onChange={setDeadValue} value={deadValue} name="Delivery_Time_in_IST" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Task Status</h1>
                            <Select className="bg-white drpdwn" options={jobStatus} onChange={(jbStatus) => setJbStatus(jbStatus)} name="Task_Status" />
                            {/* <input placeholder="Task Status" name="Task_Status" type="text" /> */}
                        </div>
                     </div>

                     <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Assigned FTE</h1>
                            <Select className="bg-white drpdwn" options={fteNum} onChange={(fte) => setFte(fte)} name="Assigned_FTE"/>
                            {/* <input placeholder="Assigned FTE" name="Assigned_FTE" type="number" /> */}
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Allocation To</h1>
                            <Select className="bg-white drpdwn" options={jobAlloted} onChange={(jballoted) => setJballoted(jballoted)} name="Task_allocation_To"/>
                            {/* <input placeholder="Task allocation To" name="Task_allocation_To" type="text" /> */}
                        </div>
                     </div>

                     <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Reallocation To</h1>
                            <input placeholder="Task reallocation To" name="Task_reallocation_To" type="text" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Multiple users</h1>
                            <input placeholder="If assigned to multiple users" name="If_assigned_to_multiple_users" type="text" />
                        </div>
                     </div>
                    
                     <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Hours Spent</h1>
                            <input placeholder="Hours Spent" name="Hours_Spent" type="number" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Comments</h1>
                            <input placeholder="Comments" name="Comments_Challenges" type="text" />
                        </div>
                     </div>

                     <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Task QA'ed by</h1>
                            <Select className="bg-white drpdwn" options={jobQa} onChange={(jbQa) => setJbQA(jbQa)} name="Task_QA"/>
                            {/* <input placeholder="Task QA'ed by" name="Task_QA" type="text" /> */}
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">QA'ed multiple users</h1>
                            <input placeholder="If QA'ed multiple users" name="If_QA_multiple_users" type="text" />
                        </div>
                     </div>

                     <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Hours Spent</h1>
                            <input placeholder="Hours Spent" name="Hours_Spent" type="number" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Comments</h1>
                            <input placeholder="Comments" name="Comments_Challenges" type="text" />
                        </div>
                     </div>

                     <div className="sm:flex flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className="font-[700]">Non Production Hours</h1>
                            <input placeholder="Non Production Hours" name="Non_Production_Hours" type="text" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-[700]">Notes</h1>
                            <input placeholder="Notes" name="Notes" type="text" />
                        </div>
                     </div>
                     
                    <input name="Name" type="submit" className="bg-blue-950 hover:bg-gray  w-32 mt-10 text-center mx-auto text-white p-2" />
                </div>
                
            
          
        </form> 
      </div>
    </>
}
export default TaksTracker;