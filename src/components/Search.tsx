import './Search.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { searchAsync } from '../Redux/searchSlice';
import { useAppDispatch } from '../Redux/store';

type FormValues = {
  search: string;
};

function Search() {
  const { register, handleSubmit } = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormValues> = data => {
    //Send Request & update state
    dispatch(searchAsync(data.search))
  }

  return (
    <form className='SearchInputDiv' onSubmit={handleSubmit(onSubmit)}>
      <input { ...register("search") } id='search' placeholder='Search for any IP address or domain' className='SearchInput' type='text'/> 
      <input className='SubmitButton' type="submit" value='>'/>
    </form>
  )
}

export default Search
