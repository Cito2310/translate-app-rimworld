import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { setCurrentSearch } from '../../store/search';
import { useAppDispatch } from '../../store';

export const useInputSearch = () => {
    const { register, watch, getValues } = useForm();
    const dispatch = useAppDispatch();

    useEffect(() => { dispatch(setCurrentSearch( getValues().currentSearch )) }, [watch()])

    return { register }
}
