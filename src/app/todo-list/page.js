import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";


export default async function ToDoList () {
    
  
    return (
        
        <div>
            <NavbarComponent/>
            <SidebarComponent/>
            <div className="container">
                <h1>ToDoList</h1>
            </div>
           
        </div>
    )

}