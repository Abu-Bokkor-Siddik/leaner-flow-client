

const Annoucement = ({item}) => {
  console.log(item)
  return (
    <div>
    <div className=" max-w-[300px] h-auto my-10 rounded-xl shadow-2xl bg-slate-50 p-5">
    <div className="flex gap-3 items-center">

    <div className="avatar my-2">
    <div className="w-14 rounded-full">
      <img src={item?.image} />
    </div>
    </div>
    <div>Name : {item?.name}</div>
    
    
    </div>

    <h1 className="my-2">title:{item.title}</h1>
    <h1 className="my-3">description : {item.description}</h1>
</div>
    </div>
  )
}

export default Annoucement