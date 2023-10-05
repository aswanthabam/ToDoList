import "./InsertBox.css"
export default function InsertBox() {
  const onChangeTitle = (ve) =>{
    
  }
  const onChangeDescription = (e) =>{
    
  }
  return <div className="insert-box">
    <input onBlur={(e)=>{
      document.querySelector("textarea.description").classList.remove("selected")}
    } onFocus={(e)=>{
      document.querySelector("textarea.description").classList.add("selected")}
      
    } className="title" onChange={onChangeTitle} type="text" placeholder="Task Title"/>
    <textarea className="description" onChange={onChangeDescription} type="text" placeholder="Task Description"></textarea>
  </div>
}