import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const App = () => {
  const [data, setData] = useState("");
  const [correntData, setCurrectData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function handleAdd() {
    if (data !== '') {
      setCurrectData([...correntData, { text: data, completed: false }]);
    }
    setData('');
  }

  function handleDelete(index) {
    const updateData = [...correntData];
    updateData.splice(index, 1);
    setCurrectData(updateData);
  }

  function handleCompleted(index) {
    const updateData = [...correntData];
    updateData[index].completed = true;
    setCurrectData(updateData);
  }

  const filteredData = correntData.filter((item) => item.text.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <h1 className='text-3xl font-bold bg-sky-600 text-center text-white py-3'>Todo List App</h1>

      <div className='flex items-center justify-center my-3 gap-4'>
        <input
          className='px-10 py-3 font-bold rounded-md border-solid border-2 border-sky-500'
          type="text"
          placeholder="Add Todo..."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={handleAdd}><AddCircleIcon className='text-sky-600 text-xl hover:scale-100' /></button>
      </div>
      <div className=''>
        <input
          className='px-10 py-3 font-bold rounded-md border-solid border-2 border-sky-500 mx-5'
          type="text"
          placeholder="Search Todo..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {
          filteredData.map((item, index) => {
            return (
              <div key={index} className={`done flex justify-between list-none gap-3 mx-5 my-5 text-xl border-solid border-2 border-sky-300 rounded-md px-4 py-3 ${item.completed ? 'line-through text-green-600' : ''}`}>
                <li>{item.text}</li>
                <div className='flex gap-2'>
                  {!item.completed && (
                    <button onClick={() => handleCompleted(index)}>
                      <DoneOutlineIcon className='text-green-600' />
                    </button>
                  )}
                  <button onClick={() => handleDelete(index)}>
                    <DeleteIcon className='text-red-600' />
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
