import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
type dataProps={
    onChange:React.ChangeEventHandler<HTMLInputElement>,
    onSubmit:(event: React.FormEvent<HTMLFormElement>) => void,
    Value:string
}
const ChatDoctor = ({onChange,Value,onSubmit}:dataProps) => {
    
  return (
    <div>
      <form className="text-center mt-5 text-1xl" onSubmit={onSubmit}>
        <div className="w-full relative px-10 md:px-20">
          <input
            type="text"
            placeholder="Search Doctor"
            value={Value}
            onChange={onChange}
            className="border-2 border-gray-300 w-full h-10 pl-2 rounded-lg hover:rounded-lg focus:rounded-lg"
            
          />
          <MagnifyingGlassIcon className="w-5 absolute right-14 md:right-24 top-1/4" />
        </div>
      </form>
    </div>
  );
};

export default ChatDoctor;
